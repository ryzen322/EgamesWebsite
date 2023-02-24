const item = [
  {
    title: "My Playlist #5",
    name: "21Savage",
    img: "21Savage.jpg",
  },
  {
    title: "My Playlist #4",
    name: "Travis Scott",
    img: "travisScott.jpg",
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
    <img src="./img/${element.img}" alt=""  loading="lazy"/>
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

const home = document.querySelector("#home");
const content = document.querySelector(".content");

home.addEventListener("click", () => {
  // content.classList.toggle("display-none");
});

const sectionMyPlaylist = document.querySelector(".section-myplaylist");

const favortiesPlaylist = [1, 2, 3, 4, 5];

item.slice(0, 5).forEach((e) => {
  const html = `<div class="myplaylist-element">
  <div class="myplaylist-element-img">
    <img src="./img/${e.img}" alt=""  loading="lazy"/>
    <span class="material-symbols-outlined"> favorite </span>
  </div>
  <h1>${e.name}</h1>

  <div class="play-btn-1">
    <span class="material-symbols-outlined"> play_arrow </span>
  </div>
</div>`;

  sectionMyPlaylist.insertAdjacentHTML("beforeend", html);
});

const sectionArtist = document.querySelector(".section-artist");

item.forEach((e) => {
  const html = `<div class="artist-playlist">
  <div class="artist-album">
    <img src="./img/${e.img}" alt=""  loading="lazy"/>
    <div class="play-btn">
      <span class="material-symbols-outlined"> play_arrow </span>
    </div>
  </div>
  <h1>${e.name}</h1>
  <p>Artist</p>
</div>`;

  sectionArtist.insertAdjacentHTML("beforeend", html);
});

const skelaton = document.querySelectorAll(".section-artist")[1];
item.splice(0, item.length - 2).forEach((e) => {
  const html = `<div class="artist-playlist">
  <div class="artist-album">
   
    <div class="play-btn">
      <span class="material-symbols-outlined"> play_arrow </span>
    </div>
  </div>
  <div class="section-3-skeletal"></div>
  <div class="section-3-skeletal"></div>
  <div class="section-3-skeletal"></div>
  <div class="section-3-skeletal"></div>
</div>`;

  skelaton.insertAdjacentHTML("beforeend", html);
});
