//Exercise 9
/**To install these modules, you'll need to `npm install replify` and
`npm install replpad` respectively.

If you really want to go through the wormhole to a magical world of
live application introspection, you can *combine replify and replpad*:

// in your application
var replify = require("replify");
var replpad = require("replpad");

var server = require("http").createServer(function (req, res) {
  res.end("hello");
});

replify({name : "hello-server", start : replpad}, server);

server.listen(1234, function () {
  console.log("listening");
});

Once you start that server, install `repl-client` and connect to the
running service:

    rc /tmp/repl/hello-server.sock
    // on Windows: rc \\.\pipe\tmp-repl\hello-server.sock

and you'll get connected to the replify'd replpad, where you can
type `app` and get the current state of your HTTP server! Whatever
object you pass to the call to replify is the `app` context in the
REPL, so you can pass it a database connection pool or HTTP agent for
making outbound requests and easily see the state of the service,
interactively, in realtime. MAGIC.
*/