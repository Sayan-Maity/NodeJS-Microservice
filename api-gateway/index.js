const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = {
  "/user": "http://localhost:3001",
  "/order": "http://localhost:3002",
  "/book": "http://localhost:3003",
};

// create a proxy for each route :
for (const [route, target] of Object.entries(routes)) {
  app.use(route, createProxyMiddleware({ target, changeOrigin: true }));
}
// create a proxy for each route :
// for (const route in routes) {
//   const target = routes[route];
//   app.use(route, createProxyMiddleware({ target, changeOrigin: true }));
// }

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
