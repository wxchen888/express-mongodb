// http
import http from "http";

const hostname = "127.0.0.1";
const port = 3000;
// 创建http服务器 监听8000端口
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, () => {
  console.log(`server is running on http://${hostname}:${port}`);
});
