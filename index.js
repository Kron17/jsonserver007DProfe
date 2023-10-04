const jsonServer = require("json-server"); //IMPORAT EL JSONSERVER
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //SE PUEDE USAR CUALQUIER PUERTO

server.use(middlewares);
server.use(router);
server.listen(port);