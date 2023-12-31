const formContainer = document.querySelector("#container");
const form = document.querySelector("#form");
const newBook = document.querySelector("#new-book");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");
const bookshelf = document.querySelector(".bookshelf");
let formOpen = false;
let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function formOpenOrClosed() {
  if (formOpen) {
    formContainer.style.transform = "scale(0)";
    newBook.style.transform = "rotate(0)";
    form.reset();
    overlay.style.opacity = 0;
    formOpen = false;
  } else {
    formContainer.style.transform = "scale(1)";
    newBook.style.transform = "rotate(45deg)";
    overlay.style.opacity = 1;
    formOpen = true;
  }
}

// close modal
function closeModal() {
  formContainer.style.transform = "scale(0)";
  overlay.style.opacity = 0;
  newBook.style.transform = "rotate(0)";
  form.reset();
  formOpen = false;
}

function addToLibrary(i)  {
  let bookNode = document.createElement("div")
  bookNode.classList.add("book");
  bookNode.setAttribute("data-index", `${i}`);

  const title = document.getElementById("title").value;
  let titleNode = document.createElement("h2");
  titleNode.innerHTML = `Title: ${title}`;

  const author = document.getElementById("author").value;
  let authorNode = document.createElement("h3");
  authorNode.innerHTML = `Author: ${author}`;

  const pages = document.getElementById("pages").value;
  let pagesNode = document.createElement("h3");
  pagesNode.innerHTML = `Pages: ${pages}`;

  const read = document.getElementById("read").value;
  let readNode = document.createElement("h3");
  readNode.innerHTML = `Read? ${read}${read === "Yes" ? "😃" : "😢"}`;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pagesNode);
  bookNode.appendChild(readNode);
  bookshelf.appendChild(bookNode);
}

function getBooks() {
myLibrary.forEach((book, i) => {
addToLibrary(i)
})
bookNode.appendChild(titleNode);
bookNode.appendChild(authorNode);
bookNode.appendChild(pagesNode);
bookNode.appendChild(readNode);
bookshelf.appendChild(bookNode);

}

document.addEventListener("load", getBooks);
newBook.addEventListener("click", formOpenOrClosed);
closeButton.addEventListener("click", closeModal);
form.addEventListener("submit", (e, i) => {
  e.preventDefault();
  addToLibrary(i);
});




