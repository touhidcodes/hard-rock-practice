// Fetch Data from Server and Display
const getData = () => {
  const keyWord = document.getElementById("search").value;
  fetch(`https://api.lyrics.ovh/suggest/${keyWord}`)
    .then((res) => res.json())
    .then((Data) => {
      const data = Data.data;
      fixedData = data.slice(0, 10);
      const musicList = document.getElementById("new-element");
      musicList.innerHTML = "";

      // Loop Data and Get properties
      for (let i = 0; i < fixedData.length; i++) {
        const musicInfo = fixedData[i];
        const musicTitle = musicInfo.title;
        const musicAlbum = musicInfo.title_short;
        const artistName = musicInfo.artist.name;
        createList(musicTitle, musicAlbum, musicInfo);
        // console.log(musicTitle, musicAlbum);
        getLyrics(artistName, musicTitle);
      }
      // console.log(fixedData);
    });
};

// Create Element Function
const createList = (title, album, song) => {
  const musicList = document.getElementById("new-element");
  musicList.innerHTML += `
    <div class="single-result row align-items-center my-3 p-3">
      <div class="col-md-9">
        <h3 class="lyrics-name"> ${title} </h3>
        <p class="author lead">
          Album by <span> ${album} </span>
        </p>
      </div>
      <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success" id="get-lyrics" onclick="getLyrics('${song.artist.name}','${song.title}')">Get Lyrics</button>
      </div>
    </div>`;
};

// Show Lyrics
const getLyrics = (artist, title) => {
  fetch(
    `https://private-anon-f47abfbea8-lyricsovh.apiary-mock.com/v1/${artist}/${title}`
  )
    .then((res) => res.json())
    .then((data) => {
      displayLyrics(data.lyrics);
    });
};

const displayLyrics = (lyrics) => {
  const lyricsDiv = document.getElementById("lyrics");
  lyricsDiv.innerText = lyrics;
};
