let myLibrary = [];


// object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return (title + " by " + author + ", " + pages + " pages, " + read)
    }
}

var GameOfThrones = new Book("Game of Thrones", "J.R" , "1000", "read");
myLibrary.push(GameOfThrones);

//function that prompts user to add book
function addBook() {
    let title = prompt("Title:")
    let author = prompt("Author:")
    let pages = prompt("Pages:")
    let read = prompt("Read or Not Read:")
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

const list = document.querySelector("#list");

// function to display items as unordered list
function displayItems() {
myLibrary.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item.title;
    list.appendChild(li);

});
}

// function to display form after clicking 'add book' button
const btn = document.querySelector("#btn") 
const form = document.querySelector("#form");
form.style.display = 'none';
btn.addEventListener('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
})