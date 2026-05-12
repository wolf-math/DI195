let goodGrades = 85;

let endSemester = new Promise((resolve, reject) => {
  if (goodGrades > 90) {
    resolve('Computer');
  } else if (goodGrades >= 80 && goodGrades <= 89) {
    resolve('Phone');
  } else {
    reject("I won't get the gift");
  }
});

endSemester.finally(() =>
  console.log(`No matter if I get a gift or not, I want to have good grades`)
);
endSemester.then((value) => console.log('I got an amazing gift : A ', value));
endSemester.catch((value) => console.log('Booo', value));

console.log(endSemester);
