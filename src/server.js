import http from "http";
import fs from "fs";

const port = 3000;

export const server = http.createServer((req, res) => {
  //   console.log("REQUEST METHOD IS: " + req.method);
  console.log("REQUEST URL IS: " + req.url);

  let path = "public/index.html";

  if (req.url === "/style.css") {
    path = "public/style.css";
  }
  if (req.url === "/script.js") {
    path = "public/script.js";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Error");
    } else {
      res.end(data);
    }
  });
});

export function startServer() {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
