//  Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//! Ans:
var expect = function (val) {
  return {
    toBe: function (other) {
      if (val === other) {
        return true;
      }

      throw new Error("Not Equal");
    },

    notToBe: function (other) {
      if (val !== other) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

// Example 1:
// Input: func = () => expect(5).toBe(5);
console.log(expect(5).toBe(5));

// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// Input: func = () => expect(5).toBe(null);
// console.log(expect(5).toBe(null));

// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// Input: func = () => expect(5).notToBe(null);
// console.log(expect(5).notToBe(null));

// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.
