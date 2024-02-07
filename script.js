const booksList = document.querySelector('#booksList');
const booksProgress = document.querySelector('#booksProgress');
const tableBody = document.querySelector('#tableBody');

const books = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    maxPages: 200,
    onPage: 60,
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    maxPages: 250,
    onPage: 150,
  },
  {
    title: '50 Shades of Grey',
    author: 'E.L. James',
    maxPages: 150,
    onPage: 150,
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    maxPages: 350,
    onPage: 300,
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare',
    maxPages: 550,
    onPage: 550,
  },
];

const titleByAuthor = (book) => `${book.title} by ${book.author}`;

const populateBooks = () => {
  books.forEach((book) => {
    const booksListEl = document.createElement('li');
    const booksProgressEl = document.createElement('li');

    booksListEl.textContent = `${titleByAuthor(book)}.`;
    booksList.appendChild(booksListEl);

    if (book.onPage === book.maxPages) {
      booksProgressEl.textContent = `You already have read ${titleByAuthor(book)}.`;
      booksProgressEl.style.color = 'green';
    } else {
      booksProgressEl.textContent = `You still need to read ${titleByAuthor(book)}.`;
      booksProgressEl.style.color = 'red';
    }

    booksProgress.appendChild(booksProgressEl);
    const percent = Math.round((book.onPage / book.maxPages) * 100);

    tableBody.innerHTML += `
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.maxPages}</td>
    <td>${book.onPage}</td>
    <td>
      <div class="grey">
        <div class="green" style="width:${percent}%">${percent}%</div> 
    </div>
    </td>
  </tr>
  `;
  });
};

populateBooks();

const addBook = (event) => {
  event.preventDefault();
  const bookTitle = event.target['bookTitle'].value;
  const bookAuthor = event.target['bookAuthor'].value;
  const currentPage = +event.target['currentPage'].value;
  const maxPages = +event.target['maxPages'].value;

  if (maxPages >= currentPage && bookTitle !== '' && bookAuthor !== '') {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      maxPages: maxPages,
      onPage: currentPage,
    };

    books.push(newBook);
    booksList.innerHTML = '';
    booksProgress.innerHTML = '';
    tableBody.innerHTML = '';

    populateBooks();
  } else {
    alert('The input fields are empty, or current page value is larger than the number of max pages of the book. Please add correct values.');
  }

  event.target.reset();
};

document.querySelector('#addBook').addEventListener('submit', addBook);
