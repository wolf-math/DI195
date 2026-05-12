function func1() {
  func2();
  console.log('func1');
}

function func2() {
  func3();
  console.log('func2');
}

function func3() {
  console.log('func3');
}

func1();
// order
// 1. func3
// 2. func2
// 3. func1
