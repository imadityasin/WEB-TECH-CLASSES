// NESTED FUNCTION.

// This feature allows for more modular and readable code by encapsulating related functionality 
// within the context where it's needed.

function outerFunction() {
    let outerVariable = 10;
  
    function innerFunction() {
      let innerVariable = 20;
      console.log("Outer Variable:", outerVariable);
      console.log("Inner Variable:", innerVariable);
    }
  
    innerFunction(); // Call the inner function
  }
  
  outerFunction(); // Call the outer function