/**************************************************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
    // books.forEach(element => {
    //   if (element.id === bookId)
    //     return element
      
    // });
    for (let i=0;i<books.length ;i++){
      if (books[i].id===bookId)
        return books[i];
    }
    return undefined;
}

/**************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  for (let i=0;i<authors.length ;i++){
    if (authors[i].name.toLowerCase()===authorName.toLowerCase())
      return authors[i];
  }
  return undefined;

}

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  let array =[];
  for (let i=0;i<authors.length ;i++){
      let obj ={};
      obj.author=authors[i].name;
      obj.bookCount=authors[i].books.length;
      array.push(obj);
  }
  return array;
}

/**************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
function booksByColor(books) {
  const colors = {};
  // colors.COLOR=[]
  for (let i=0 ;i<books.length;i++){
    if (books[i].color in colors)
          colors[books[i].color].push(books[i].title);
    else
     {colors[books[i].color]=[];
     colors[books[i].color].push(books[i].title);
     }
  }

  return colors;
}

/**************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
function titlesByAuthorName(authorName, authors, books) {
  let booksId=[];
  let booksTitle=[];
  for (let i =0;i<authors.length;i++)
  {
    if (authors[i].name.toLowerCase()=== authorName.toLowerCase())
    {
        booksId=authors[i].books;
    }
  }
  for(let j=0;j<booksId.length;j++){
    booksTitle.push(getBookById(booksId[j],books)["title"]);
  }
  return booksTitle;
  
}

/**************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
  let mostA=authors[0].name;
  let numBooks=authors[0].books.length;
  for(let i=1;i<authors.length;i++)
  {
    if (authors[i].books.length > numBooks)
        {mostA=authors[i].name;
        numBooks=authors[i].books.length;
        }
  }
  return mostA;
}

/**************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  let author =getBookById(bookId,books).authors;
  console.log(getBookById(bookId,books).authors[0].name);
  let Authorbooks =[];
  for (let i=0 ;i<author.length;i++){
    Authorbooks.push(titlesByAuthorName(author[i].name,authors,books));
  }

  return Authorbooks;
}

/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  // Your code goes here
}

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor
};

/**
 * Uncomment the following lines if you
 * want to manually test your code
 */

// const authors = require("./authors.json");
// const books = require("./books.json");

// console.log(getBookById(12, books));
// console.log(getAuthorByName("J.K. Rowling", authors));
// console.log(bookCountsByAuthor(authors));
// console.log(booksByColor(books));
// console.log(titlesByAuthorName("George R.R. Martin", authors, books));
// console.log(mostProlificAuthor(authors));
// console.log(relatedBooks(50, authors, books));
// console.log(friendliestAuthor(authors));
