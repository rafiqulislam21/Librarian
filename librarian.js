var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  /* Task 2 */
  { title: "Digital fortress", year: "1972", author: "dan brown", publisher: "Addison-Wesley" }
  
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library.push(book);

  return library;
}

var newBook = {
  title: "Herry potter", year: "1986", author: "J K Rowling", publisher: "Addison-Wesley"
};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
 library.sort(function(a, b) { 
    var nameA = a.author.toLowerCase(), nameB = b.author.toLowerCase()  

    if(nameA < nameB) return -1;

    if(nameA > nameB) return 1;

    return 0;
 });
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  var mName = [];
  var mTitle;
  for(var i = 0; i < library.length; i++){
    mTitle = library[i].title;
    n = mTitle.search(title);

    if(n!=-1){
      mName[i] = library[i];
    }

  }
  return JSON.stringify(mName);
}
 

console.log(findByTitle(/man/i));
console.log(findByTitle(/myth/i));
