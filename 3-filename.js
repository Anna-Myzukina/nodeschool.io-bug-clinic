//Exercise 3 filename.js
/*1. Install jshint (`npm install --global jshint` – maybe with sudo on
Linux, probably logged in as an administrator on Windows) 
2. and use it
to figure out and fix what's wrong with this program (which has the
filename <filename.js> below):
    today = 'today';
    console.log('date is', timestamp());
    console.log('today is', today);

    function timestamp() {
      today = Date();
      return today;
    }
    
   3. Put it : 
    {
        "node": true,
        "undef": true
    }
    in a file named jshintrc, and then run jshint with
`jshint --config jshintrc <filename.js>`
    */

today = 'today';

console.log('date is', timestamp());
console.log('today is', today);

function timestamp() {
  today = Date();
  return today;
}