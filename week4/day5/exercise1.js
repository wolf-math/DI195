let myObj = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  friends: ['Mark', 'Lucie', 'Ana']
};

for (entry of Object.entries(myObj)) {
  console.log(`The x# key is : ${entry[0]} The x# value is : ${entry[1]}`);
}

Object.entries(myObj).forEach((entry) => {
  console.log(`The x# key is : ${entry[0]} The x# value is : ${entry[1]}`);
});
