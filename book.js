// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

// Method in the Book prototype to get book information
Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("------------------------");
};

// Creating instances of Author and Book
const author1 = new Author("John Doe", 1980, "American");
const book1 = new Book("The Great Book", author1, "Fiction", 19.99);

const author2 = new Author("Jane Smith", 1975, "British");
const book2 = new Book("Adventure Awaits", author2, "Adventure", 24.99);

const author3 = new Author("Alice Johnson", 1990, "Canadian");
const book3 = new Book("Mystery Mansion", author3, "Mystery", 14.99);

// Displaying book details for each book in the bookstore
book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
