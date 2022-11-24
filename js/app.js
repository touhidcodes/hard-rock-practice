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
        console.log(artistName);
        createList(musicTitle, musicAlbum);
        // console.log(musicTitle, musicAlbum);
        getLyrics(musicAlbum, musicTitle);
      }
      console.log(Data);
    });
};

// Create Element Function
const createList = (title, album) => {
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
        <button class="btn btn-success">Get Lyrics</button>
      </div>
    </div>`;
};

const getLyrics = (album, title) => {
  fetch(`https://api.lyrics.ovh/v1/${album}/${title}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
