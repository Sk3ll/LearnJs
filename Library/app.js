var Author = /** @class */ (function () {
    function Author(name, biography) {
        this._nameAuthor = name;
        this._biography = biography;
    }
    Author.prototype.getName = function () {
        console.log(this._nameAuthor);
    };
    Author.prototype.getBiography = function () {
        console.log(this._biography);
    };
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.authorBook = author;
        this.views = 0;
    }
    Book.prototype.getTitle = function () {
        console.log(this.title);
    };
    Book.prototype.getAuthor = function () {
        console.log(this.authorBook);
    };
    Book.prototype.getStatistic = function () {
        console.log(this.views);
    };
    return Book;
}());
var Reader = /** @class */ (function () {
    function Reader(name, email, city, street, house) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.street = street;
        if (house > 0) {
            this.house = house;
        }
        this.views = 0;
    }
    Reader.prototype.getName = function () {
        console.log(this.name);
    };
    Reader.prototype.getEmail = function () {
        console.log(this.email);
    };
    Reader.prototype.getCity = function () {
        console.log(this.city);
    };
    Reader.prototype.getStreet = function () {
        console.log(this.street);
    };
    Reader.prototype.getHouse = function () {
        console.log(this.house);
    };
    Reader.prototype.setName = function (name) {
        if (name !== null || name !== '') {
            this.name = name;
        }
    };
    Reader.prototype.setEmail = function (email) {
        if (email !== null || email !== '') {
            this.email = email;
        }
    };
    Reader.prototype.setCity = function (city) {
        if (city !== null || city !== '') {
            this.city = city;
        }
    };
    Reader.prototype.setStreet = function (street) {
        if (street !== null || street !== '') {
            this.street = street;
        }
    };
    Reader.prototype.setHouse = function (house) {
        if (house !== null || house <= 0) {
            this.house = house;
        }
    };
    return Reader;
}());
var Order = /** @class */ (function () {
    function Order(book, reder) {
        this.bookOrder = book;
        this.reader = reder;
        this.date = new Date();
    }
    Order.prototype.getStattistic = function () {
        console.log(this.bookOrder.views);
        console.log(this.reader.views);
    };
    Order.prototype.setStattistic = function () {
        this.bookOrder.views++;
        this.reader.views++;
    };
    Order.prototype.dateOrder = function (year, month, day) {
        this.date = new Date(year, month - 1, day);
        console.log(this.date);
    };
    return Order;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.orders = [];
        this.readers = [];
        this.authors = [];
    }
    Library.prototype.getBooks = function () {
        console.log(this.books);
    };
    Library.prototype.setBooks = function (book) {
        this.books.push(book);
    };
    Library.prototype.getOrders = function () {
        console.log(this.orders);
    };
    Library.prototype.setOrders = function (order) {
        this.orders.push(order);
    };
    Library.prototype.getReaders = function () {
        console.log(this.readers);
    };
    Library.prototype.setReaders = function (reader) {
        this.readers.push(reader);
    };
    Library.prototype.getAuthors = function () {
        console.log(this.authors);
    };
    Library.prototype.setAuthors = function (author) {
        this.authors.push(author);
    };
    Library.prototype.getStatiscticOftenBook = function () {
        var mostViews;
        mostViews = this.readers[0].views;
        for (var i = 0; i < this.readers.length; i++) {
            if (this.readers[i].views >= mostViews) {
                mostViews = this.readers[i].views;
            }
            //console.log(this.books[i])
        }
        for (var i = 0; i < this.readers.length; i++) {
            if (this.readers[i].views === mostViews) {
                console.log("Who often takes the book: " + this.readers[i].name);
            }
        }
    };
    Library.prototype.getStatiscticPopularBook = function () {
        var mostViews;
        mostViews = this.books[0].views;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].views >= mostViews) {
                mostViews = this.books[i].views;
            }
        }
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].views === mostViews) {
                console.log("The most popular book : " + this.books[i].title);
            }
        }
    };
    Library.prototype.getStatisticPeople = function () {
        var used = {};
        var filtered = this.orders.filter(function (obj) {
            return obj.bookOrder.title in used ? true : (used[obj.bookOrder.title] = false);
        });
        console.log("How many people ordered one of the three most popular books: " + filtered.length);
    };
    return Library;
}());
var rouling = new Author('J.K.Rouling');
var harryPotter = new Book('Harry Potter, and coub of fire', rouling);
var phoenix = new Book('Harry Potter, and orden of the fenix', rouling);
var yar = new Reader('Yar', 'sk3llyar@gmail.com', 'Kharkiv', 'lenina st.', 14);
var stas = new Reader('Stas', 'qwert123@gmail.com', 'Kharkiv', 'korolev st.', 88);
var yarOrder1 = new Order(harryPotter, yar);
var yarOrder2 = new Order(phoenix, yar);
var yarOrder3 = new Order(harryPotter, yar);
var stasOreder1 = new Order(harryPotter, stas);
yarOrder1.setStattistic();
yarOrder2.setStattistic();
yarOrder3.setStattistic();
stasOreder1.setStattistic();
var korolenkoLibrary = new Library();
korolenkoLibrary.setBooks(harryPotter);
korolenkoLibrary.setBooks(phoenix);
korolenkoLibrary.setOrders(yarOrder1);
korolenkoLibrary.setOrders(yarOrder2);
korolenkoLibrary.setOrders(yarOrder3);
korolenkoLibrary.setOrders(stasOreder1);
korolenkoLibrary.setReaders(yar);
korolenkoLibrary.setAuthors(rouling);
korolenkoLibrary.getStatiscticOftenBook();
korolenkoLibrary.getStatiscticPopularBook();
korolenkoLibrary.getStatisticPeople();
yarOrder1.getStattistic();
