const showForm = document.getElementById("showForm");
const cancel = document.getElementById("cancel");
const bookContainer = document.getElementById("bookContainer");

const formContainer = document.getElementById("insertBookContainer");

cancel.addEventListener("click",()=>{
    if (formContainer.style.display === "block") {
        formContainer.style.display = "none";
      }

});


showForm.addEventListener("click",()=>{
        if (formContainer.style.display === "none") {
          formContainer.style.display = "block";
        }
      });

let myLibrary = [];

function Book(title,author,pages,readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot =false;
}

function displayBooks(){
    myLibrary.forEach((book)=>{
        let card = document.createElement("div");
        card.classList.add("bookCard");
        bookContainer.appendChild(card);

    });
}
displayBooks();