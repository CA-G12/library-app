const cardsWrapper = document.querySelector('.cards-wrapper');

const createElements = (element) => document.createElement(element);

// handle card function
const handleCard = (obj) => {
  const cardDiv = createElements('div');
  cardDiv.setAttribute('class', 'card-grid-space');
  const a = createElements('div');
  a.setAttribute('class', 'card');
  a.setAttribute('style', `--bg-img: url(${obj.book_image})`);
  // a.style.backgroundImage = `url(${obj.book_image})`;
  cardDiv.appendChild(a);
  const bookDiv = createElements('div');
  const h1 = createElements('h1');
  h1.setAttribute('id', 'book-name');
  h1.textContent = `${obj.book_name}`;
  bookDiv.appendChild(h1);

  const bookDescription = createElements('p');
  bookDescription.setAttribute('id', 'book-desc');
  bookDescription.textContent = `${obj.description}`;
  bookDiv.appendChild(bookDescription);

  const deleteDiv = createElements('div');
  deleteDiv.setAttribute('class', 'delete');
  const i = createElements('i');
  i.setAttribute('class', 'fa-solid fa-circle-minus fa-xl');
  deleteDiv.appendChild(i);
  bookDiv.appendChild(deleteDiv);

  const tagDiv = createElements('div');
  tagDiv.setAttribute('class', 'tags');

  const genreDiv = createElements('div');
  genreDiv.setAttribute('class', 'genre');
  genreDiv.textContent = `${obj.book_name}`;
  tagDiv.appendChild(genreDiv);
  bookDiv.appendChild(tagDiv);
  a.appendChild(bookDiv);
  cardsWrapper.appendChild(cardDiv);
  console.log(1111111);
};

fetch('/books')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((obj) => {
      handleCard(obj);
    });
    console.log(data);
  })
  .catch((err) => console.log(err));
