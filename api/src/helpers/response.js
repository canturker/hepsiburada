const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET',
  'Content-Type': 'application/json',
};

export default class Response {
  Ok = (res, data, message) => {
    res.writeHead(200, headers);
    res.write(
      JSON.stringify({
        status: 200,
        message: message,
        content: data,
      })
    );
    res.end();
  };
  Bad = (res, message) => {
    res.writeHead(400, headers);
    res.write(
      JSON.stringify({
        status: 400,
        message: message,
        content: '',
      })
    );
    res.end();
  };
  NoContent = () => {
    res.writeHead(204, headers);
    res.end();
  };
}
