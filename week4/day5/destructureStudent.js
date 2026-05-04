const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85
  }
};

function displaySummary1(student) {
  console.log(`Hello, ${student.name}`);
  console.log(`Your Maths score is ${student.scores.maths || 0}`);
  console.log(`Your English score is ${student.scores.english || 0}`);
  console.log(`Your Science score is ${student.scores.science || 0}`);
}

function displaySummary2({
  name,
  scores: { maths = 0, english = 0, science = 0 }
}) {
  console.log(`Hello, ${name}`);
  console.log(`Your Maths score is ${maths}`);
  console.log(`Your English score is ${english}`);
  console.log(`Your Science score is ${science}`);
}
