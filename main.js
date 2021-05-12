const showForm = document.getElementById("showForm");
const cancel = document.getElementById("cancel");
const bookContainer = document.getElementById("bookContainer");
const formContainer = document.getElementById("insertBookContainer");
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click",insertBook);


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

let myLibrary = [{ title: "Livro bom", author: "Minha tia", pages: "69",read: "No"}];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks(){
    myLibrary.forEach((item)=>{
      let index = myLibrary.indexOf(item);
      var bookCards = document.querySelectorAll(".bookCard");
      if (!bookCards[index]){
      createCard(item,index);
    }
        

    });
}

function createCard(book, index){
  let card = document.createElement("div");
  card.classList.add("bookCard");
  card.setAttribute("id",index);
  let bookInfo = document.createElement("p");
  bookInfo.innerHTML = `Title: ${book.title} </br></br>
  Author: ${book.author}</br></br>
  Pages: ${book.pages}</br></br>
  Read: ${book.read} `;
  card.appendChild(bookInfo);
  let delButton = document.createElement("button");
  delButton.textContent = "Delete Book";
  card.appendChild(delButton);
  bookContainer.appendChild(card);


}
function insertBook(){
if (author.value != "" && title.value != "" && pages.value !=""){
  let newBook = new Book(title.value,author.value,pages.value);
  myLibrary.push(newBook);
  displayBooks();
}
  else{
    alert("You need to fill all the information.");
  

}
}


displayBooks();