import jsonServer from "json-server";

// Create a server router and middleware

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use default middlewares

server.use(middlewares);
//  use the router

server.use(router);

// start the server
const port = 3000;

server.listen(port, () => {
  console.log(`JSON Server is running ${port}`);
});
