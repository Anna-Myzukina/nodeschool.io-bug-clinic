//Exercise 9

/*Write a module that exports a function that takes
a callback, starts an HTTP server on port 8080 (that can reply with
whatever). The function should also use replify (and replpad, if you
feel like it) to expose an object that contains a property named
"__message" with the value "REPLs are neat" in its second argument.
The REPL should be named "bug-clinic" (include this somewhere in the
first argument).  When everything is running, it should call the
callback with the server and the replify instance as arguments.

The function should look something like the following:

    module.exports = scenario;

    function scenario(callback) {
      var createServer = require("http").createServer;

      var server = createServer(// do HTTP response stuff here );
      var repl = // do replify stuff here

      callback(server, repl);
    }*/

module.exports = scenario;

var replify = require("replify");

function scenario(callback) {
  var createServer = require("http").createServer;
  var server = createServer();

  server.__message = "REPLs are neat";
  var repl = replify({name : "bug-clinic"}, server);

  server.listen(8080, function () { callback(server, repl); });
}