// Fetch Data from Server
const getData = () => {
  const keyWord = document.getElementById("search").value;
  fetch(`https://api.lyrics.ovh/suggest/${keyWord}`)
    .then((res) => res.json())
    .then((Data) => {
      const data = Data.data;
      fixedData = data.slice(0, 9);
      for (let i = 0; i < fixedData.length; i++) {
        const musicInfo = fixedData[i];
        const musicTitle = musicInfo.title;
        console.log(musicTitle);
      }
    });
};
