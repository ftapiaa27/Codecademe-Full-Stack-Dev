class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    getAverageRating() {
      // let sum = 0
      // this._ratings.forEach(rating => sum += rating);
      let sum = this._ratings.reduce((sum, rating) => sum + rating, 0);
      return Math.floor(sum / this._ratings.length);
    }
  
    toggleCheckOutStatus() {
      if (this.isCheckedOut == false) {
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      }
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime ) {
      super(title);
      this._director = director;
      this._runTime = runTime ;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime () {
      return this._runTime ;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs  = songs ;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs () {
      return this._songs ;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  