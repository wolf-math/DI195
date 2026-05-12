async function hello() {
  setTimeout(() => {
    return 'Hello';
  }, 500);
}

async function greet() {
  const b = await hello();
  console.log(b);
}

greet();
