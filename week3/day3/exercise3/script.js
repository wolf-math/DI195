// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to get the values of First and Last name of the following form

function getvalue(event) {
  event.preventDefault();

  const form = document.getElementById('form1');

  const firstName = form.elements['fname'].value;
  const lastName = form.elements['lname'].value;

  console.log(firstName);
  console.log(lastName);
}
