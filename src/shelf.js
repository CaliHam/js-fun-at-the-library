var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "sciFi"
};
var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "sciFi"
};
var endersGame = {
  title: "Ender's Game",
  mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
  pageCount: 324,
  genre: "sciFi"
};
var caseysBook = {
  title: "The Robot Kitty",
  mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
  pageCount: 201,
  genre: "sciFi"
};
var bossypants = {
  title: "Bossypants",
  mainCharacter: { name: "Tina Fey", age: 50, pronouns: "she/her" },
  pageCount: 277,
  genre: "nonFiction"
};
var whyNotMe = {
  title: "Why Not Me?",
  mainCharacter: { name: "Mindy Kaling", age: 41, pronouns: "she/her" },
  pageCount: 240,
  genre: "nonFiction"
};

var sciFiShelf = [];

function shelfBook(book, shelfType) {
  if (shelfType.length <= 2){
    shelfType.unshift(book);
    return shelfType;
  };
};

sciFiShelf = [hyperion, dune, endersGame];
var nonFictionShelf = [bossypants, whyNotMe];

function unshelfBook(bookTitle, shelfType) {
  var removedBook = shelfType.find(book => book.title === bookTitle);
  var index = shelfType.indexOf(removedBook);
  shelfType.splice(index, 1);
  return shelfType;
};

var fantasyShelf = [hyperion, dune, endersGame];

function listTitles(shelfType) {
  var shelvedBooks = shelfType.map(book => book.title);
  return shelvedBooks.join(', ');
};
var nonFictionShelf = [bossypants, whyNotMe];

function searchShelf(shelfType, bookTitle) {
  var shelvedBooks = shelfType.map(book => book.title);
  if (shelvedBooks.includes(bookTitle)) {
    return true;
  }
  else {
    return false;
  };
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};