import http from "http";
import app from "./App.js";

const port = process.env.PORT || 6000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(
    `server is running on port ${port}\nwaiting for mongoose connection...`
  );
});
