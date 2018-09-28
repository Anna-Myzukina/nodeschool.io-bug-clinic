// Exercise 7 scan-server.js
//And here's a simple server to test it against:
/*If you run this server with `NODE_DEBUG=http node scan-server.js`,
it will show you what's going on with the server, when you test it with
the buggy `node scan-client.js`.  You can also see an example
server run by running `bug-clinic run scenario.js` -- it will be the
text at the top of the output run.
Overall, it would make sense to do this with 3 separate terminal sessions :
1.  node server.js
      - this is the process you're debugging : get its PID with
        (`ps fax | grep node` in Linux, for instance).

2.  curl http://localhost:9999/XYZ
      - stimulates the server to do something

3.  jstrace -p <server-pid> watcher.js
      - gives you the jstrace messages
*/

//  scan-server.js
    var createServer = require("http").createServer;
    var server = createServer(function (req, res) {
      res.end("hello");
    });
    server.listen(9876, function () {
      console.log("listening");
    });