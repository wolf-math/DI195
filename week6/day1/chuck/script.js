const joke = document.getElementById('joke');

const loading = document.getElementById('loading');

function getJoke() {
  loading.style.visibility = 'visible';
  fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error;
      }
    })
    .then((data) => {
      loading.style.visibility = 'hidden';
      joke.innerText = data.value;
    })
    .catch((error) => console.log(error));
}

const btn = document.getElementById('btn');
btn.addEventListener('click', getJoke);

// async function fetchChuck() {
//   const res = await fetch(
//     'https://api.chucknorris.io/jokes/random?category=dev'
//   );
//   const data = await res.json();
//   const joke = data.value;
//   console.log(joke);
// }
