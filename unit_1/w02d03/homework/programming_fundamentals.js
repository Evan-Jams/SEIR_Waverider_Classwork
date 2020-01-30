// DRY
//-- Don't repeat yourself: use things like loops, functions, classes, etc.



// KISS
//-- Keep it simple stupid: something I am very familiar with being a golf instructor. The simplest answer is often the best.



// Avoid creating a YAGNI
//-- Don't create something until you need it: So you don't pollute the global space with things you might not even use.



// Do the simplest thing that could possibly work
//-- Goes back to Keep It Simple Stupid, the less moving parts, the less that can go wrong.



// Don't make me think
//-- Be sematic, name things appropiately, guide the user in the right direction. Don't be a norman door



// Write code for the maintainer
//-- Goes back to dont make me think. Associate functions, objects, variables, etc. with declarations that are obvious. Better to have a longer name than an acronym or single element where the maintainer will have to follow the breadcrumbs to figure out what's going on.



// Single responsibility principle
//-- don't make a function or variable responsible for too many actions. Better for debugging and problem solving.



// Avoid premature optimization
//-- First get it working, then go back and simplify.



// Separation of concerns
//-- Keep your code from becoming a knitted sweater, where one snag and the whole thing starts unraveling.


// nothing really surprised me on the list, makes sense
// the one that gives me the most trouble is premature optimization.
//==========================================================================//

//==========================================================================//
//======================== Commenting Code =================================//
//==========================================================================//

// Creating function called: 'f' that takes 'l' as a parameter
const f = l => {
  // declaring variables with a numeric value
  let es = 0, p = 0, c = 1, n = 0
  // as long as variable c is less than or equal to l is true...
  while (c <= l) {
    // while the above condition is true, n is equal to the sum of c and p
    n = c + p,
    // array [1, 0] is array [1, 1]
    [c, p] = [n, c]
    // if c % 2 === 0 is true then add c to es, else add 0
    es += (c % 2 === 0) ? c : 0
  }
  // return es, which is 0
  return es
}
// plugging 55 into the function f, and logging the result to the console
console.log(f(55))

// Not exactly sure whats going on in this function, the result from the code is 44. I really dont understand whats going on in this lol

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))

// a better name for the function would maybe be sumEvenNumbers? I'm still not exactly positive what this function is doing.
//If I could figure out what this function was trying to accomplish then I could add to the variables and function name. Maybe use previousNum and currentNum? my brain doesnt seem to want to make sense of this. I'm going to come back to this later if there is time.

//I would rather the second funtion, it's definitely less confusing and I know what each variable is trying to store.

// the semi-colon IS necessary

//=======================================================================//
