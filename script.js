const addBookBtn = document.querySelector("[data-open-modal]");
const submitBtn = document.querySelector("#submit");
const modal =document.querySelector("[data-modal]");
const booksGrid = document.querySelector("#booksGrid")
let myLibrary = ["kk","kksdfa"];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
     }
}

function addBookToLibrary() {
    const addBook ={
    title: "",
    author: "",
    pages: 0,
    read: "",
 }
 myLibrary.push(addBook);
}




addBookBtn.addEventListener("click", () => {
modal.showModal()
});

function bookContainer() {
console.log(myLibrary);
for(let i = 0; i < myLibrary.length; i++) {

    //form Container
    let formContainer = document.createElement("DIV");
    formContainer.setAttribute("class", "books-grid");
    document.body.appendChild(formContainer);

    //form
    let form = document.createElement("FORM");
    formContainer.appendChild(form);
    form.setAttribute("class", "book-card");
    let formTitle = document.createElement("H2");
    formTitle.textContent = "Book Information";
    form.appendChild(formTitle);
    //form inputs
    let formTitleInput = document.createElement("INPUT");
    formTitleInput.setAttribute("type", "text");
    formTitleInput.setAttribute("class", "book-card");
    formTitleInput.setAttribute("placeholder", "Title");
    form.appendChild(formTitleInput);
    //author inputs
    let formAuthorInput = document.createElement("INPUT");
    formAuthorInput.setAttribute("type", "text");
    formAuthorInput.setAttribute("class", "book-card");
    formAuthorInput.setAttribute("placeholder", "Author");
    form.appendChild(formAuthorInput);
    //pages inputs
    let formPagesInput = document.createElement("INPUT");
    formPagesInput.setAttribute("type", "text");
    formPagesInput.setAttribute("class", "book-card");
    formPagesInput.setAttribute("placeholder", "Pages");
    form.appendChild(formPagesInput);
}
}
bookContainer()


