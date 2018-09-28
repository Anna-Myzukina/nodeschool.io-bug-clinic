//Exercise 5
/*run `npm install stackup`, and then in your
program, add `require('stackup')` at the top

As an example, what happens when you run this program with bad input?
    var readFile = require("fs").readFile;
    module.exports = scenario;
    function scenario(jsonPath, cb) {
      readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
        cb(error, JSON.parse(contents));
      });
    }
The challenge here is to figure out how to get a stacktrace that shows
the bug, and to get the long stacktrace to the verifier by passing the
Error you get to the callback. You will probably need to use either
domains or the trycatch module, because a simple try / catch won't
work. If you don't know domains, read the Node API documentation on
them, or use this brutally abbreviated primer:

    var domain = require("domain");
    function doSomethingDangerousAndAsync(cb) {
      // create a new domain
      var d = domain.create();

      // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
      d.on("error", cb);

      // use the domain
      d.run(function () {
        doDangerousAsyncThing(cb);
      });
    }
*/

require('stackup');
var readFile = require("fs").readFile;
var domain = require("domain");

module.exports = scenario;

function scenario(jsonPath, cb) {
  var d = domain.create();

  d.on('error', cb);

  d.run(function () {
    readFile(jsonPath, { encoding: "utf8" }, function (error, contents) {
      cb(error, JSON.parse(contents));
    })
  });
}