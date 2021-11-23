import http from 'http';
import ProductsController from './controller/products';
import ResponseHelper from './helpers/response';
import UrlParser from './helpers/urlParser';

const PORT = '8080';
const Products = new ProductsController();
const Response = new ResponseHelper();

http
  .createServer(function (req, res) {
    const { method } = req;
    const reqUrl = UrlParser(req);

    switch (true) {
      case method === 'OPTIONS':
        Response.NoContent();
        break;
      case reqUrl.pathname === '/api/products' && method === 'GET':
        Products.getList(req, res);
        break;
      default:
        Response.Bad(res, 'Bad Request');
        break;
    }
  })
  .listen(PORT);

console.log('\x1b[32m%s\x1b[0m', '------');
console.log('\x1b[32m%s\x1b[0m', `App Listening on localhost:${PORT}`);
console.log('\x1b[32m%s\x1b[0m', '------');
