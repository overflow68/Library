const showForm = document.getElementById("showForm");
const cancel = document.getElementById("cancel");
const bookContainer = document.getElementById("bookContainer");
const formContainer = document.getElementById("insertBookContainer");
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let read = document.getElementsByName("readOrNo");
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

let myLibrary = [{ title: "Livro qualquer", author: "Gabriel Nicolitoiu", pages: "70",read: "Yes"}];

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
        
          p  = document.getElementById("bookInfo"+index);
          p.innerHTML = `Title: ${item.title} </br></br>
  Author: ${item.author}</br></br>
  Pages: ${item.pages}</br></br>
  Read: ${item.read} `;
  

        


    });
   
}


  
function createCard(book, index){
  let card = document.createElement("div");
  card.classList.add("bookCard");
  card.setAttribute("id",index);
  let bookInfo = document.createElement("p");
  bookInfo.setAttribute("id","bookInfo" + index);
  card.appendChild(bookInfo);
  let delButton = document.createElement("button");
  delButton.setAttribute("id","deleteBook" + index);
  delButton.textContent = "Delete Book";
  delButton.className="cardButton delBtn";
  delButton.addEventListener("click",deleteBook);
  globalThis.readToggle = document.createElement("button");
  readToggle.setAttribute("id","readTog" + index);
  readToggle.textContent = "Toggle read";
  readToggle.className = "cardButton togBtn";
  card.appendChild(readToggle);
  readToggle.addEventListener("click",function(){
    toggleRead(index);
  });

  card.appendChild(delButton);
  bookContainer.appendChild(card);


}
function insertBook(){
  let selectedAnswer;
if (author.value != "" && title.value != "" && pages.value !="")
{
  for(var i = 0; i < read.length; i++){
    if(read[i].checked == true) {
    selectedAnswer = read[i].value;}
  }

  let newBook = new Book(title.value,author.value,pages.value,selectedAnswer);
  myLibrary.push(newBook);
  displayBooks();
}
  else{
    alert("You need to fill the information correctly.");
  

}
}

function toggleRead(index){
  if(myLibrary[index].read == "Yes"){
    myLibrary[index].read = "No";
  }
  
  else{
    myLibrary[index].read = "Yes";
  }
  updateCard(myLibrary[index],index);

}

function updateCard(book,index){
  const bookInfoo = document.getElementById("bookInfo" + index);

  bookInfoo.innerHTML = `Title: ${book.title} </br></br>
  Author: ${book.author}</br></br>
  Pages: ${book.pages}</br></br>
  Read: ${book.read} `;


}
function deleteBook(){
const parent = event.target.parentElement;
const parentIndex = parent.id;
myLibrary[parentIndex] = null;
parent.remove();

};


displayBooks();
