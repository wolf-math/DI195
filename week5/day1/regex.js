const gmailPattern =
  /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gim;

const myEmail = 'example@hotmail.com';
const yourEmail = 'example@gmail.com';

const res1 = myEmail.match(gmailPattern);
const res2 = yourEmail.match(gmailPattern);

console.log(res1);
console.log(res2);
