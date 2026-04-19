// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

function ageCalc(myAge) {
  // 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

  let mum = myAge * 2;
  const dad = mum * 1.2;

  console.log(
    'Mum is ' + mum + ' years old, and dad is ' + dad + ' years old.'
  );

  console.log('A year has passed...');

  mum++;
  console.log('now mum is ' + mum);
}

// 4. Call the function.

ageCalc(36);
ageCalc(66);
ageCalc(10);
