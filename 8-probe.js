// Exercise 8 
/*You should be able to start your server, run `jstrace -p <server-pid>`
with the tracer script below, and see the status codes and URLs
being printed to the terminal as you hit your server with curl:

    // watcher.js
    module.exports = {
      local : function (traces) {
        traces.on("request:start", function (trace) {
          console.log(trace.url);
        });

        traces.on("request:end", function (trace) {
          console.error(trace.statusCode);
        });
      }
    };

      */
module.exports = {
    local : function (traces) {
      traces.on("request:start", function (trace) {
        console.log(trace.url);
      });

      traces.on("request:end", function (trace) {
        console.error(trace.statusCode);
      });
    }
  };
