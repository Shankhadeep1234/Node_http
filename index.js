const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/names") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        id: 1,
        name: "Shankhadeep",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Shankhadeep</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 400;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});
