const robots = [
  {
    id: 1,
    firstName: 'Aleksandra',
    lastName: 'Godes',
    username: 'AGodes',
    email: 'agodes@gmail.com'
  },
  {
    id: 2,
    firstName: 'Amit',
    lastName: 'Ashkenazi',
    username: 'Amit',
    email: 'amit@ashkenazi.com'
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Spizzichino',
    username: 'GioBoi',
    email: 'giovanni@apizzichino.com'
  },
  {
    id: 4,
    firstName: 'Henri',
    lastName: 'Safra',
    username: 'Henrio',
    email: 'henri@safra.com'
  },
  {
    id: 5,
    firstName: 'Jocky',
    lastName: 'Shor',
    username: 'Jackystrap',
    email: 'jocky@shor.com'
  },
  {
    id: 6,
    firstName: 'Gabriella',
    lastName: 'Zamora',
    username: 'Gabbby',
    email: 'gabriella@z.com'
  },
  {
    id: 7,
    firstName: 'Maurice',
    lastName: 'Calo',
    username: 'MoreIce',
    email: 'Maurice@gmail.com'
  },
  {
    id: 8,
    firstName: 'naomi',
    lastName: 'bocobza',
    username: 'bobz',
    email: 'naomi@france.com'
  },
  {
    id: 9,
    firstName: 'Zion',
    lastName: 'Burtman',
    username: 'MustardMan',
    email: 'zion@mustard.com'
  },
  {
    id: 10,
    firstName: 'Bek',
    lastName: 'Guida`',
    username: 'becknCall',
    email: 'bek@gmail`.com'
  },
  {
    id: 11,
    firstName: 'Aaron',
    lastName: 'Wolf',
    username: 'Wolfmath',
    email: 'aaron@wolf.com'
  },
  {
    id: 12,
    firstName: 'Avner',
    lastName: 'Maman',
    username: 'mamamia',
    email: 'Avner@Maman.com'
  }
];

const robotContainer = document.getElementById('robot-container');

function robotCardCreator(robotObj) {
  // create card
  const card = document.createElement('div');
  card.className = 'card';
  card.id = robotObj.id;

  // create image
  const image = document.createElement('img');
  image.className = 'robot-image';
  image.src = `https://robohash.org/${robotObj.firstName}%20${robotObj.lastName}?set=set4`;

  // create username
  const username = document.createElement('h2');
  username.innerText = robotObj.username;

  // create full name
  const fullName = document.createElement('h2');
  fullName.innerText = `${robotObj.firstName} ${robotObj.lastName}`;

  // create email
  const email = document.createElement('h3');
  email.innerText = robotObj.email;

  // append elements to card
  card.appendChild(image);
  card.appendChild(username);
  card.appendChild(fullName);
  card.appendChild(email);

  return card;
}

function mapRobots(robotArray) {
  robotContainer.innerHTML = '';

  robotArray.map((robot) => {
    card = robotCardCreator(robot);
    robotContainer.appendChild(card);
  });
}

mapRobots(robots);

function filterBots(query) {
  return robots.filter((robot) => {
    return Object.values(robot).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase())
    );
  });
}

search = document.getElementById('search');

search.addEventListener('input', (e) => {
  e.preventDefault();
  const filtered = filterBots(e.target.value);
  mapRobots(filtered);
});
