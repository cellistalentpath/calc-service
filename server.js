const http = require("http");
const Calculator = require("./Calculator");

function parseQuery(query) {
  const calc = new Calculator(0);
  const array = query.split(" ");
  let result = null;
  for (i = 0; i < array.length; i++) {
    let parsed = parseFloat(array[i]);
    if (isNaN(parsed)) {
      switch (array[i]) {
        case "+":
          calc.add(parseFloat(array[i + 1]));
          break;
        case "-":
          calc.sub(parseFloat(array[i + 1]));
          break;
        case "*":
          calc.mul(parseFloat(array[i + 1]));
          break;
        case "/":
          calc.div(parseFloat(array[i + 1]));
          break;
        default:
          return "Query ha";
      }
    } else if (result === null) {
      result = parsed;
      calc.add(result);
    }
  }
  return JSON.stringify(calc.equals());
}

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url.includes("/calculator/?q=")) {
    response.statusCode = 200;
    const URLObject = new URL("http:localhost:8080" + request.url);
    const input = decodeURI(URLObject.search).substring(
      4,
      decodeURI(URLObject.search).length - 1
    );
    let answer = parseQuery(input);
    response.write(answer);
  }
  response.end();
});

server.listen(8080);

module.exports = parseQuery;
