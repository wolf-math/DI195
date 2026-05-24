// Define an Interface for a Book

// Task: Create an interface Book with properties title, author, and pages (number). Add an optional property genre (string). Write a function getBookSummary that returns a summary of the book's details, including the genre if it's provided.

interface Book {
  title: string;
  author: string;
  pages: number;
  genre?: string; // optional
}

function getBookSummary(book: Book): string {
  // return book.genre
  //   ? `${book.title} by ${book.author} is a ${book.genre} book that is ${book.pages} pages long.`
  //   : `${book.title} by ${book.author} is ${book.pages} pages long.`;

  if (book.genre) {
    return `${book.title} by ${book.author} is a ${book.genre} book that is ${book.pages} pages long.`;
  } else {
    return `${book.title} by ${book.author} is ${book.pages} pages long.`;
  }
}

const book1: Book = {
  title: 'The Greatest Book in the World',
  author: 'Aaron Wolf',
  pages: 555,
  genre: 'inspirational'
};

const book2 = {
  title: 'Vurt',
  author: 'Jeff Noon',
  pages: 300
};

console.log(getBookSummary(book1));
console.log(getBookSummary(book2));
