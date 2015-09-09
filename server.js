var http = require("http"),
    Faye = require("faye");

var server = http.createServer(),
    bayeux = new Faye.NodeAdapter({
              mount: "/"
            });

bayeux.attach(server);
server.listen(6000);

var server = require("./node_router").getServer(),
    client = new Faye.Client("http://localhost:6000/");

server.get("/", function (request, response) {
  client.publish("/messages", {
    text: "Hello world"
  });

  response.simpleJson(200, { "message": "Hello World!" });
});

server.listen(8000, "localhost");
