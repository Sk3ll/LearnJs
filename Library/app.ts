class Author {
    _nameAuthor: string;
    _biography?: string;
    constructor(name: string, biography?: string){
        this._nameAuthor = name;
        this._biography = biography;
    }

    getName():void {
        console.log(this._nameAuthor);
    }
    getBiography(): void {
        console.log(this._biography);
    }
}

class Book {
    title: string;
    authorBook: Author;
    views: number;
    constructor(title: string, author: Author){
        this.title = title;
        this.authorBook = author;
        this.views = 0;
    }
    getTitle(): void {
        console.log(this.title);
    }
    getAuthor(): void {
        console.log(this.authorBook);
    }
    getStatistic(): void {
        console.log(this.views);
    }
}

class Reader {
    name: string;
    email: string;
    city: string;
    street: string;
    house: number;
    views: number;
    
    constructor( name: string, email: string, city: string, street: string, house: number ){
        this.name = name;
        this.email = email;
        this.city = city;
        this.street = street;
        if ( house > 0){
            this.house = house;
        }
        this.views = 0;
    }
    getName(): void {
        console.log(this.name);
    }
    getEmail(): void {
        console.log(this.email);
    }
    getCity(): void {
        console.log(this.city);
    }
    getStreet(): void {
        console.log(this.street);
    }
    getHouse(): void {
        console.log(this.house);
    }
    setName(name: string) {
        if( name !== null || name !== '' ) {
            this.name = name;
        }
    }
    setEmail(email: string) {
        if( email !== null || email !== '' ) {
            this.email = email;
        }
    }
    setCity(city: string) {
        if( city !== null || city !== '' ) {
            this.city = city;
        }
    }
    setStreet(street: string) {
        if( street !== null || street !== '' ) {
            this.street = street;
        }
    }
    setHouse(house: number) {
        if( house !== null || house <= 0  ) {
            this.house = house;
        }
    }
}

class Order {
    bookOrder: Book;
    reader: Reader;
    date: Date;

    constructor( book: Book , reder: Reader ) {
        this.bookOrder = book;
        this.reader = reder;
        this.date = new Date();
    }
    getStattistic(): void{
        console.log(this.bookOrder.views);
        console.log(this.reader.views);
    }
    setStattistic(): void{
        this.bookOrder.views++;
        this.reader.views++;
    }

    dateOrder(year: number, month: number, day: number): void {
        this.date = new Date(year, month - 1, day);
        console.log(this.date)
    }
}

class Library {
    books: Array<Book>;
    orders: Array<Order>;
    readers: Array<Reader>;
    authors: Array<Author>
    constructor() {
        this.books = [];
        this.orders = [];
        this.readers = [];
        this.authors = [];
    }
    getBooks(): void {
        console.log(this.books);
    }
    setBooks(book: Book): void {
        this.books.push(book);
    }
    getOrders(): void {
        console.log(this.orders);
    }
    setOrders(order: Order): void {
        this.orders.push(order);
    }
    getReaders(): void {
        console.log(this.readers);
    }
    setReaders(reader: Reader): void{
        this.readers.push(reader);
    }
    getAuthors(): void {
        console.log(this.authors);
    }
    setAuthors(author: Author):void {
        this.authors.push(author);
    }


    getStatiscticOftenBook(): void {
        let mostViews: Number;
        mostViews = this.readers[0].views;
        for( let i = 0; i < this.readers.length; i++ ){
            if ( this.readers[i].views >= mostViews ) {
                mostViews = this.readers[i].views;
            }
            //console.log(this.books[i])
        }
        for( let i = 0; i < this.readers.length; i++ ) {
            if ( this.readers[i].views ===  mostViews) {
                console.log(`Who often takes the book: ${this.readers[i].name}`);
            }
        }
    }
    getStatiscticPopularBook(): void {
        let mostViews: Number;
        mostViews = this.books[0].views;
        for( let i = 0; i < this.books.length; i++ ){
            if ( this.books[i].views >= mostViews ) {
                mostViews = this.books[i].views;
            }
        }
        for( let i = 0; i < this.books.length; i++ ) {
            if ( this.books[i].views ===  mostViews) {
                console.log(`The most popular book : ${this.books[i].title}`);
            }
        }
    }
    getStatisticPeople(): void {
        let used = {};
        let filtered = this.orders.filter(function(obj) {
            return obj.bookOrder.title in used ? true:(used[obj.bookOrder.title]=false);
        });

        console.log(`How many people ordered one of the three most popular books: ${filtered.length}`);

        
    }
}


let rouling = new Author('J.K.Rouling');

let harryPotter = new Book('Harry Potter, and coub of fire', rouling);
let phoenix = new Book('Harry Potter, and orden of the fenix', rouling);

let yar = new Reader('Yar', 'sk3llyar@gmail.com', 'Kharkiv', 'lenina st.', 14);
let stas = new Reader('Stas', 'qwert123@gmail.com', 'Kharkiv', 'korolev st.', 88);

let yarOrder1 = new Order(harryPotter, yar);
let yarOrder2 = new Order(phoenix, yar);
let yarOrder3 = new Order(harryPotter, yar);
let stasOreder1 = new Order(harryPotter, stas)
yarOrder1.setStattistic();
yarOrder2.setStattistic();
yarOrder3.setStattistic();
stasOreder1.setStattistic();


let korolenkoLibrary = new Library();
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