import Response from '../helpers/response';
import Sorter from '../helpers/sorter';
import UrlParser from '../helpers/urlParser';
import DATA from '../mockData/index';

export default class Products {
  constructor() {
    this.data = DATA;
    this.response = new Response();
  }

  getList(req, res) {
    const reqUrl = UrlParser(req);
    const searchParams = reqUrl.searchParams;

    let responseData = this.data;

    const querySort = searchParams.get('sort');
    const queryFilters = searchParams.get('filter');
    const querySearch = searchParams.get('search');

    if (querySearch) {
      responseData = responseData.filter((data) =>
        data.title.toLowerCase().includes(querySearch.toLowerCase())
      );
    }

    if (queryFilters) {
      const filtersSplited = queryFilters.split(';');

      const filterObject = filtersSplited.reduce((acc, filter) => {
        const [key, value] = filter.split(':');
        if (value) {
          acc[key] = value;
        }
        return acc;
      }, {});

      responseData = responseData.reduce((acc, data) => {
        const filterKeys = Object.keys(filterObject);
        const isMatched = filterKeys.reduce((accFilter, fk) => {
          if (
            typeof data[fk] !== undefined &&
            filterObject[fk].includes(data[fk])
          ) {
            accFilter.push(true);
          } else {
            accFilter.push(false);
          }
          return accFilter;
        }, []);

        if (isMatched.length > 0 && !isMatched.includes(false)) {
          acc.push(data);
        }
        return acc;
      }, []);
    }

    if (querySort && typeof Sorter[querySort] !== undefined) {
      responseData = responseData.sort(Sorter[querySort]);
    }

    this.response.Ok(res, responseData, 'Success');
  }
}
