// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format: 
// "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of 
// the last element is "all", print the names of all the songs.




function songs(inputArr) {
    let workingInputArr = inputArr.slice();
    workingInputArr.shift();
    const typeList = workingInputArr.pop();

    class Songs {
        constructor(type, name) {
            this.type = type;
            this.name = name;
        }
    }

    for (let songArr of workingInputArr) {
        let [typeOfSong, songName] = songArr.split(`_`);

        let song = new Songs(typeOfSong, songName);

        if (song.type === typeList) {
            console.log(song.name);
        } else if (typeList === `all`) {
            console.log(song.name);
        }
    }
}
songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
);

// Second solution:

function songs(inputArr) {
    let workingInputArr = inputArr.slice();
    workingInputArr.shift();
    const typeList = workingInputArr.pop();

    class Songs {
        constructor(type, name) {
            this.type = type;
            this.name = name;
        }
    }

    let songsArr = [];

    for (let songArr of workingInputArr) {
        let [typeOfSong, songName] = songArr.split(`_`);

        let song = new Songs(typeOfSong, songName);

        songsArr.push(song);
    }

    if (typeList !== `all`) {
        songsArr = songsArr.filter(x => x.type === typeList);      
    } 

    let songNames = songsArr.map(x => x.name);
    return songNames.join(`\n`);
}
console.log(songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
));
