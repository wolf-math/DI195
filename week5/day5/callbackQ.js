function func1() {
  func2();
  console.log('func1');
}

function func2() {
  setTimeout(() => console.log('timeout from func2'), 5000);
  console.log('func2');
}

setTimeout(() => console.log('timeout'), 0);
func1();
