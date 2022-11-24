// Fetch Data from Server
const getData = () => {
  const keyWord = document.getElementById("search").value;
  fetch(`https://api.lyrics.ovh/suggest/${keyWord}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
