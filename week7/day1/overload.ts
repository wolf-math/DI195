function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(3, 5)); // Output: 8
console.log(combine('Hello, ', 'World!')); // Output: Hello, World!

// ================

function calculateArea(width: number, height: number): number;
function calculateArea(side: number): number;
function calculateArea(a: number, b?: number): number {
  if (b) {
    return a * b;
  }
  return a ** 2;
}

console.log(calculateArea(5)); // Output: 25 (square)
console.log(calculateArea(5, 10)); // Output: 50 (rectangle)
