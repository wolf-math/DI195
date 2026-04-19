// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

function ageCalc(myAge) {
  // 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

  const mum = myAge * 2;

  return mum;
}

const mumAge = ageCalc(44);
console.log(mumAge);
