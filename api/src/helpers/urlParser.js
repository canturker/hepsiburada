const UrlParser = (req) => {
  const baseURL = 'http://' + req.headers.host + '/';
  const reqUrl = new URL(req.url, baseURL);
  return reqUrl;
};

export default UrlParser;
