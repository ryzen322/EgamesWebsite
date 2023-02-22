const item = [
  {
    title: "My Playlist #5",
    name: "Rj S Gammad",
    img: "profile.jpg",
  },
  {
    title: "My Playlist #4",
    name: "Rj S Gammad",
    img: "profile.jpg",
  },
  {
    title: "Eminem",
    name: "Rj S Gammad",
    img: "eminem.jpg",
  },
  {
    title: "SixCylceMind",
    name: "Henry Lawrence",
    img: "six.jpg",
  },
  {
    title: "The Itchyworms",
    name: "Itchyworms",
    img: "itchy.jpg",
  },
  {
    title: "OPM Favorites",
    name: "100% Pinoy hits",
    img: "opm.jpg",
  },
  {
    title: "Matchox",
    name: "Matchbox 21his",
    img: "matchbocx.jpg",
  },
  {
    title: "Simple Plan",
    name: "Simple plan",
    img: "simpe.jpg",
  },
  {
    title: "50cents best hit",
    name: "50cents",
    img: "50cents.jpg",
  },
  {
    title: "Best hits 2020-2019",
    name: "Tiktok",
    img: "tiktokhits.jpg",
  },
  {
    title: "Best hits 2021-2012",
    name: "Tiktok Now here",
    img: "tiktok.jpg",
  },
  {
    title: "Kenny rogers Tour",
    name: "Kenny Rogers",
    img: "kennyrogers.jpg",
  },
  {
    title: "The last hit",
    name: "JYT",
    img: "thelast.jpg",
  },
];

const myplaylist = document.querySelector(".myplaylist");

item.forEach((element) => {
  const html = `<div class="created-playlist">
  
    <div class="playlist-img">
    <img src="./img/${element.img}" alt="" />
      <span class="material-symbols-outlined"> headphones </span>

      <div class="play-btn">
        <span class="material-symbols-outlined"> play_arrow </span>
      </div>
    </div>
    <h1>${element.title}</h1>
    <p>By ${element.name}</p>
  </div>`;

  myplaylist.insertAdjacentHTML("beforeend", html);
});
