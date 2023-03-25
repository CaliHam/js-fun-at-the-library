function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [], 
      fiction: [], 
      nonFiction: []},
  };
  return library;
};

function addBook(libraryName, book) { 
  var genre = book.genre;
  libraryName.shelves[genre].push(book);
  return;
};

function checkoutBook(libraryName, bookTitle, shelfType) {
  var foundBook = libraryName.shelves[shelfType].find(book => book.title === bookTitle)
  if (foundBook) {
    var removedBook = libraryName.shelves[shelfType].indexOf(bookTitle);
    libraryName.shelves[shelfType].splice(removedBook, 1);
    return `You have now checked out ${bookTitle} from the ${libraryName.name}.`;
  }
  else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}.`
  };
};

function takeStock(libraryName, shelfType) {
  if (!shelfType){
    var totalBooks = libraryName.shelves.fantasy.length + libraryName.shelves.nonFiction.length + libraryName.shelves.fiction.length;
    return `There are a total of ${totalBooks} books at the ${libraryName.name}.`
  } else {
  var totalBooks = libraryName.shelves[shelfType].length;
  return `There are a total of ${totalBooks} ${shelfType} books at the ${libraryName.name}.`
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};