// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

//const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//question 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

const test1 = getLength(items, function(item){
  return `The list for school is ${item} items long.`;
});

console.log(test1);
//logs: The list for school is 4 items long.
//end 1st question

//question 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items[items.length - 1]);
};

const test2 = last(items, (item) => {
  return `Why is ${item} always last in the list?`;
});

console.log(test2);
//logs: Why is Gum always last in the list?
//end 2nd question

//question 3
function sumNums(x, y, cb) {
  const sum = x + y;
  return cb(sum)
  // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const test3 = sumNums(5, 6, (item) => {
  return 10 * item;
});

console.log(test3);
//logs: 110
//end 3rd question

//question 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x * y;
  return cb(product);
};
//note to self product is what is passed through totalCost(the CB) or rather product = total
const totalCost = (total) => {
  items.forEach((item) => {
    console.log(`The cost of ${item}s is $${total}.`);
  });
};

multiplyNums(10, 4, totalCost);
//logs:
/*The cost of Pencils is $40.
  The cost of Notebooks is $40.
  The cost of Notebooks is $40.
  The cost of Gums is $40.*/
//end 4th question

//question 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const check = list.includes(item);
  return cb(check, item);
};
//here I just used the same parameter names --> check = check & item = item
const inventory = (check, item) => {
  console.log(`It is ${check} that ${item}s are in the inventory.`)
}

contains('Pencil', items, inventory);
//logs: It is true that Pencils are in the inventory.
contains('Book', items, inventory);
//logs: It is false that Books are in the inventory.
//end 5th question

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
