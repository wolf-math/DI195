function outside(param) {
  function fn1() {
    return `I like ${param}`;
  }

  function fn2() {
    return `I don't like ${param}`;
  }

  if (param > 0) {
    return fn1;
  } else {
    return fn2;
  }
}

function sum(a, b) {
  const total = a + b;
  return total;

  // this never runs
  console.log($`${a} is my favorite number`);
}
