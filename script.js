const addBookBtn = document.querySelector("#add");
let myLibrary = [];

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

addBookBtn.addEventListener("click", function(){
    addBookToLibrary();
    console.log(myLibrary);
    for(let i = 0; i < myLibrary.length; i++) {
        //form Container
        let formContainer = document.createElement("DIV");
        formContainer.setAttribute("class", "formContainer");
        document.body.appendChild(formContainer);
        //form
        let form = document.createElement("FORM");
        formContainer.appendChild(form);
        form.setAttribute("id", "form");
        let formTitle = document.createElement("H2");
        formTitle.setAttribute("id", "formTitle");
        formTitle.textContent = "Book Information";
        form.appendChild(formTitle);
        //form inputs
        let formTitleInput = document.createElement("INPUT");
        formTitleInput.setAttribute("type", "text");
        formTitleInput.setAttribute("id", "title");
        formTitleInput.setAttribute("placeholder", "Title");
        form.appendChild(formTitleInput);
        //author inputs
        let formAuthorInput = document.createElement("INPUT");
        formAuthorInput.setAttribute("type", "text");
        formAuthorInput.setAttribute("id", "author");
        formAuthorInput.setAttribute("placeholder", "Author");
        form.appendChild(formAuthorInput);
        //pages inputs
        let formPagesInput = document.createElement("INPUT");
        formPagesInput.setAttribute("type", "text");
        formPagesInput.setAttribute("id", "pages");
        formPagesInput.setAttribute("placeholder", "Pages");
        form.appendChild(formPagesInput);
    //submit button
        let submit = document.createElement("BUTTON");
        submit.setAttribute("type", "submit");
        submit.setAttribute("id", "submit");
        submit.textContent = "Submit";
        form.appendChild(submit);
    }

});


