//Exercise 8
/*To install jstrace, run `npm install --global jstrace` (maybe with sudo
on Linux
So! Let's see how this works! Write a web server instrumented using
jstrace. The server should listen on port 9999 and return one of
two responses. When it gets a GET response to /prognosis, it should
return a status code of 200 and a payload of '{"ok":true}'. For ALL
other requests, it should return a status code of 404 and a payload
of '{"error":"notfound"}'. It should also print the message "up" to
standard error when it's listening, so the verifier knows it's ready
for requests.

The basic syntax of a `jstrace` call is `jstrace(signal, data)`, where
signal is the string name of the signal you're sending, and the data
is a JSON object with the data you'd like to pass back.

Your server ('server.js', for instance) should include two jstrace
probes:

1. At the beginning of the response handler, "request:start", with
   a payload object that includes the URL of the request (as "url");
2. Immediately after calling `res.end()` to send the response body,
   "request:end", with a payload object that includes the HTTP status
   code as "statusCode", and the response body (as a JavaScript
   object) with the name "body".*/

const summary = require('server-summary')
const trace = require('jstrace')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  trace('request:start', { url: req.url })
  res.setHeader('content-type', 'application/json')

  var body = null
  if (url.parse(req.url).path === '/prognosis') {
    res.statusCode = 200
    body = { ok: true }
  } else {
    res.statusCode = 404
    body = { error: 'notfound' }
  }

  res.on('finish', function () {
    trace('request:end', { statusCode: res.statusCode, body: body })
  })

  res.end(JSON.stringify(body))
})

server.listen(9999)