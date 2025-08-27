// Write a function that stores information about shelves and the books on the shelves. 
// Each shelf has an Id and a genre of books that can be on it. Each book has a title, an author, and a genre. 
// The input comes as an array of strings. They will be in the format:
// "{shelf id} -> {shelf genre}" – create a shelf if the id is not taken.
// "{book title}: {book author}, {book genre}" – if a shelf with that genre exists, add the book to the shelf.
// After finishing reading input, sort the shelves by a count of books in it in descending. 
// For each shelf sort the books by title in ascending. Then print them in the following format.
// "{shelfOne id} {shelf genre}: {books count}
// --> {bookOne title}: {bookOne author}
// --> {bookTwo title}: {bookTwo author}
// …
// {shelfTwo id} {shelf genre}: {books count}
// …"




function bookShelf(arrOfStrs) {
    let shelfObj = {};
    
    for (const string of arrOfStrs) {
        if (string.includes(` -> `)) {
            const [shelfId, shelfGenre] = string.split(` -> `);
            if (!shelfObj[shelfId]) {
                shelfObj[shelfId] = {[shelfGenre]: []};
            }
        } else if (string.includes(`: `)) {
            const [bookInfo, bookGenre] = string.split(`, `);
            for (const obj of Object.values(shelfObj)) {
              if (obj[bookGenre]) {
                obj[bookGenre].push(bookInfo);
              }
            }
            
        }
    }
    const sortedShelf = Object.entries(shelfObj).sort((a, b) => {
        const aLength = Object.values(a[1])[0].length;
        const bLength = Object.values(b[1])[0].length;
        return bLength - aLength;
    })
    
    for (const [shelfId, genreObj] of sortedShelf) {
        const booksCount = Object.values(genreObj)[0].length;
        const shelfGenre = Object.keys(genreObj)[0];
        
        console.log(`${shelfId} ${shelfGenre}: ${booksCount}`);
        const sortedBooks = Object.values(genreObj)[0].map(el => el.split(`: `)).sort((a, b) => a[0].localeCompare(b[0]));
        
        for (const bookArr of sortedBooks) {
            console.log(`--> ${bookArr.join(`: `)}`);
        }
    }
}
bookShelf([
'1 -> history', 
'1 -> action', 
'Death in Time: Criss Bell, mystery', 
'2 -> mystery', 
'3 -> sci-fi', 
'Child of Silver: Bruce Rich, mystery', 
'Hurting Secrets: Dustin Bolt, action', 
'Future of Dawn: Aiden Rose, sci-fi', 
'Lions and Rats: Gabe Roads, history', 
'2 -> romance', 
'Effect of the Void: Shay B, romance', 
'Losing Dreams: Gail Starr, sci-fi', 
'Name of Earth: Jo Bell, sci-fi', 
'Pilots of Stone: Brook Jay, history'
]);
