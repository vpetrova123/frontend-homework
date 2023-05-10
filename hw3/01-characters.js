// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const app = document.querySelector('section');

// Add your code here
const addToDOM = (character) => {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const body = document.createElement('div');
  const fullName = document.createElement('h4');
  const title = document.createElement('p');

  card.className = 'card text-center';

  img.className = 'card-img-top characterImg ms-2 mt-2';
  img.src = character.imageUrl;
  img.alt = 'Character Picture';

  body.className = 'card-body';

  fullName.className = 'card-text';
  fullName.textContent = character.fullName;

  title.className = 'card-text fw-bold';
  title.textContent = character.title;

  body.append(fullName);
  body.append(title);
  card.append(img);
  card.append(body);
  app.append(card);
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((character) => {
      addToDOM(character);
    });
  });
