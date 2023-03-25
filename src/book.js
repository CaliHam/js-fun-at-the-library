function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  var protagonist = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return protagonist;
};

var reviewArray = [];

function saveReview(review, reviewArray) {
  if (!reviewArray.includes(review)) {
    reviewArray.push(review);
  };
  return reviewArray;
};

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }; return book;
};

function editBook(title) {
  title.pageCount = title.pageCount * .75;
  };

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}