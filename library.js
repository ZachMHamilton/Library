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

// Populating library
var GameOfThrones = new Book("Game of Thrones", "J.R" , "1000", "on");
myLibrary.push(GameOfThrones);









//function that prompts user to add book
function addBook(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    var book = new Book(title, author, pages, read);

    myLibrary.push(book);
    document.getElementById("form-container").style.display = "none";
    document.getElementById("form").reset();

}

// Shows form after pressing 'Add Book' button
function showForm () {
    document.getElementById("form-container").style.display = "block";
}


// Event listeners to show form and display books after form submission
const addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", showForm);

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook(event);
    displayItems();
});



// function to display items 
function displayItems() {
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        var book = myLibrary[i];
        var bookElement = document.createElement("div");

        var titleElement = document.createElement("h2");
        titleElement.textContent = book.title;

        var authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + book.author;

        var pagesElement = document.createElement("p");
        pagesElement.textContent = "Pages: " + book.pages;

        var readElement = document.createElement("p");
        readElement.textContent = book.read ? "Read" : "Not Read";

        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(pagesElement);
        bookElement.appendChild(readElement);

        bookContainer.appendChild(bookElement);
    }
};


