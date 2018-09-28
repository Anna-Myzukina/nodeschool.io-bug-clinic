//Exercise 7
/*Frequently, it's useful to write a set of test cases to exercise all
the edge cases of your program. The following example is contrived,
but it shows the basic pattern. The function being examined is
`isGreaterThanZero()`, which there are a series of test cases for, some
of which currently fail.

The module code below gets passed a tape test object by the
verifier, so you don't need to call t.end(). As mentioned above,
`isGreaterThanZero()` has something wrong with it (it shouldn't be too
hard to figure out, but you still need to fix it):

    module.exports = scenario;

    function scenario(t) {
      t.ok(isGreaterThanZero(Infinity), 'Infinity is greater than 0')
      t.ok(isGreaterThanZero(1), '1 is greater than 0')
      t.notOk(isGreaterThanZero(0), '0 *is* 0, not greater than 0')
      t.notOk(isGreaterThanZero(-0), 'why does -0 exist')
      t.notOk(isGreaterThanZero(-1), '-1 is definitely not greater than 0')
      t.notOk(isGreaterThanZero(-Infinity), '-Infinity is definitely not greater than 0')

      function isGreaterThanZero(value) { return value >= 0 }
    }*/

module.exports = scenario;

function scenario(t) {
  t.ok(isGreaterThanZero(Infinity), 'Infinity is greater than 0')
  t.ok(isGreaterThanZero(1), '1 is greater than 0')
  t.notOk(isGreaterThanZero(0), '0 *is* 0, not greater than 0')
  t.notOk(isGreaterThanZero(-0), 'why does -0 exist')
  t.notOk(isGreaterThanZero(-1), '-1 is definitely not greater than 0')
  t.notOk(isGreaterThanZero(-Infinity), '-Infinity is definitely not greater than 0')

  function isGreaterThanZero(value) { return value > 0 }
}

