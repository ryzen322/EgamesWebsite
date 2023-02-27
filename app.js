const item = [
  {
    title: "My Playlist #5",
    name: "21Savage",
    img: "21savage.jpg",
    views: "235,623,612",
    album: [
      { title: "Revenge", views: "233,222,111", duration: "3:48" },
      { title: "Revenge", views: "233,222,111", duration: "3:48" },
      { title: "Revenge", views: "233,222,111", duration: "3:48" },
      { title: "Revenge", views: "233,222,111", duration: "3:48" },
      { title: "Revenge", views: "233,222,111", duration: "3:48" },
    ],
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
    title: "Twice",
    name: "JYP",
    img: "twice.png",
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

const item2 = [
  {
    title: "My Playlist #5",
    name: "21Savage",
    img: "21savage.jpg",
    views: "500M",
    album: [
      {
        title: "Bank Account",
        views: "1.5B",
        duration: "4:08",
        photoUrl: "bankaccount.jpg",
      },
      {
        title: "A Lot",
        views: "448M",
        duration: "6:32",
        photoUrl: "alot.jpg",
      },
      {
        title: "X",
        views: "460M",
        duration: "4:19",
        photoUrl: "x.jpg",
      },
      {
        title: "No Heart",
        views: "320M",
        duration: "3:56",
        photoUrl: "noheart.jpg",
      },
      {
        title: "Immortal",
        views: "96M",
        duration: "4:15",
        photoUrl: "immortal.jpg",
      },
    ],
  },
  {
    title: "My Playlist #4",
    name: "Travis Scott",
    img: "travisScott.jpg",
    views: "3.5B",
    album: [
      {
        title: "Goosebumps",
        views: "1.6B",
        duration: "4:03",
        photoUrl: "goosebumps.jpg",
      },
      {
        title: "Sicko Mode",
        views: "1.4B",
        duration: "5:13",
        photoUrl: "sickomode.jpg",
      },
      {
        title: "Stargazing",
        views: "429M",
        duration: "4:30",
        photoUrl: "stargazing.jpg",
      },
      {
        title: "Butterfly Effect",
        views: "548M",
        duration: "3:11",
        photoUrl: "butterflyeffect.jpg",
      },
      {
        title: "Highest in the Room",
        views: "571M",
        duration: "2:58",
        photoUrl: "highestintheroom.jpg",
      },
    ],
  },
  {
    title: "Eminem",
    name: "Rj S Gammad",
    img: "eminem.jpg",
    views: "5B",
    album: [
      {
        title: "Lose Yourself",
        views: "1.1B",
        duration: "5:26",
        photoUrl: "loseyourself.jpg",
      },
      {
        title: "Without Me",
        views: "1.5B",
        duration: "5:00",
        photoUrl: "withoutme.jpg",
      },
      {
        title: "Rap God",
        views: "1.3B",
        duration: "6:07",
        photoUrl: "rapgod.jpg",
      },
      {
        title: "Love The Way You Lie ft. Rihanna",
        views: "2.5B",
        duration: "4:27",
        photoUrl: "lovethewayyoulie.jpg",
      },
      {
        title: "The Real Slim Shady",
        views: "1.2B",
        duration: "4:28",
        photoUrl: "therealslimshady.jpg",
      },
    ],
  },
  {
    title: "SixCylceMind",
    name: "Henry Lawrence",
    img: "six.jpg",
    views: "40m",
    album: [
      {
        title: "Sandalan",
        views: "23M",
        duration: "4:26",
        photoUrl: "sandalan.jpg",
      },
      {
        title: "Upside Down",
        views: "5M",
        duration: "3:46",
        photoUrl: "upsidedown.jpg",
      },
      {
        title: "Biglaan",
        views: "17M",
        duration: "4:07",
        photoUrl: "biglaan.jpg",
      },
      {
        title: "Magsasaya",
        views: "6M",
        duration: "3:47",
        photoUrl: "magsasaya.jpg",
      },
      {
        title: "Aaminin",
        views: "11M",
        duration: "4:41",
        photoUrl: "aaminin.jpg",
      },
    ],
  },
  {
    title: "The Itchyworms",
    name: "Itchyworms",
    img: "itchy.jpg",
    views: "600m",
    album: [
      {
        title: "Akin Ka Na Lang",
        views: "18M",
        duration: "4:23",
        photoUrl: "akinkanala.jpg",
      },
      {
        title: "Beer",
        views: "13M",
        duration: "3:53",
        photoUrl: "beer.jpg",
      },
      {
        title: "Di Na Muli",
        views: "22M",
        duration: "4:36",
        photoUrl: "dinamuli.jpg",
      },
      {
        title: "Pariwara",
        views: "4M",
        duration: "4:32",
        photoUrl: "pariwara.jpg",
      },
      {
        title: "Love Team",
        views: "1M",
        duration: "3:20",
        photoUrl: "loveteam.jpg",
      },
    ],
  },
  {
    title: "OPM Favorites",
    name: "100% Pinoy hits",
    img: "opm.jpg",
    views: "300m",
    album: [
      {
        title: "Kahit Ayaw Mo Na",
        artist: "This Band",
        views: "122M",
        duration: "4:20",
        photoUrl: "kahitayawmona.jpg",
      },
      {
        title: "Tadhana",
        artist: "Up Dharma Down",
        views: "46M",
        duration: "4:26",
        photoUrl: "tadhana.jpg",
      },
      {
        title: "Buwan",
        artist: "Juan Karlos",
        views: "207M",
        duration: "5:05",
        photoUrl: "buwan.jpg",
      },
      {
        title: "Sa Ngalan ng Pag-Ibig",
        artist: "December Avenue",
        views: "81M",
        duration: "5:26",
        photoUrl: "sanglanngpagibig.jpg",
      },
      {
        title: "Huling Sandali",
        artist: "December Avenue",
        views: "33M",
        duration: "5:11",
        photoUrl: "hulingsandali.jpg",
      },
    ],
  },
  {
    title: "Matchox",
    name: "Matchbox 21his",
    img: "matchbocx.jpg",
    views: "1B",
    album: [
      {
        title: "3AM",
        album: "Yourself or Someone Like You",
        views: "43M",
        duration: "3:45",
        photoUrl: "3am.jpg",
      },
      {
        title: "Push",
        album: "Yourself or Someone Like You",
        views: "52M",
        duration: "3:59",
        photoUrl: "push.jpg",
      },
      {
        title: "Real World",
        album: "Yourself or Someone Like You",
        views: "22M",
        duration: "4:21",
        photoUrl: "realworld.jpg",
      },
      {
        title: "If You're Gone",
        album: "Mad Season",
        views: "53M",
        duration: "4:33",
        photoUrl: "ifyouregone.jpg",
      },
      {
        title: "Bent",
        album: "Mad Season",
        views: "74M",
        duration: "4:17",
        photoUrl: "bent.jpg",
      },
    ],
  },
  {
    title: "Simple Plan",
    name: "Simple plan",
    img: "simpe.jpg",
    views: "40m",
    album: [
      {
        title: "I'm Just a Kid",
        views: "73M",
        duration: "3:19",
        photoUrl: "imjustakid.jpg",
      },
      {
        title: "Addicted",
        views: "25M",
        duration: "3:52",
        photoUrl: "addicted.jpg",
      },
      {
        title: "Perfect",
        views: "81M",
        duration: "4:37",
        photoUrl: "perfect.jpg",
      },
      {
        title: "Welcome to My Life",
        views: "158M",
        duration: "3:22",
        photoUrl: "welcometomylife.jpg",
      },
      {
        title: "Shut Up!",
        views: "69M",
        duration: "3:00",
        photoUrl: "shutup.jpg",
      },
    ],
  },
  {
    title: "50cents best hit",
    name: "50cents",
    img: "50cents.jpg",
    views: "32m",
    album: [
      {
        title: "In da Club",
        views: "961M",
        duration: "4:10",
        photoUrl: "indubclub.jpg",
      },
      {
        title: "21 Questions",
        views: "700M",
        duration: "4:20",
        photoUrl: "21questions.jpg",
      },
      {
        title: "Candy Shop",
        views: "726M",
        duration: "4:11",
        photoUrl: "candyshop.jpg",
      },
      {
        title: "P.I.M.P.",
        views: "309M",
        duration: "4:09",
        photoUrl: "pimp.jpg",
      },
      {
        title: "Just a Lil Bit",
        views: "409M",
        duration: "4:20",
        photoUrl: "lilbit.jpg",
      },
    ],
  },
  {
    title: "Best hits 2020-2019",
    name: "Tiktok",
    img: "tiktokhits.jpg",
    views: "11m",
    album: [
      {
        title: "Blinding Lights",
        artist: "The Weeknd",
        views: "1.6B",
        duration: "3:23",
        photoUrl: "blindinglights.jpg",
      },
      {
        title: "Dance Monkey",
        artist: "Tones and I",
        views: "1.6B",
        duration: "3:57",
        photoUrl: "dancemonkey.jpg",
      },
      {
        title: "Shape of You",
        artist: "Ed Sheeran",
        views: "5.1B",
        duration: "4:23",
        photoUrl: "shapeofyou.jpg",
      },
      {
        title: "Señorita",
        artist: "Shawn Mendes, Camila Cabello",
        views: "1.4B",
        duration: "3:26",
        photoUrl: "senorita.jpg",
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        views: "1.3B",
        duration: "3:02",
        photoUrl: "dontstartnow.jpg",
      },
    ],
  },
  {
    title: "Best hits 2021-2012",
    name: "Tiktok Now here",
    img: "tiktok.jpg",
    views: "900m",
    album: [
      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        views: "4.5B",
        duration: "4:31",
        photoUrl: "uptownfunk.jpg",
      },
      {
        title: "Despacito",
        artist: "Luis Fonsi ft. Daddy Yankee",
        views: "7.3B",
        duration: "4:42",
        photoUrl: "despacito.jpg",
      },
      {
        title: "Hello",
        artist: "Adele",
        views: "2.9B",
        duration: "6:07",
        photoUrl: "hello.jpg",
      },
      {
        title: "Shape of You",
        artist: "Ed Sheeran",
        views: "5.1B",
        duration: "4:23",
        photoUrl: "shapeofyou.jpg",
      },
      {
        title: "Old Town Road",
        artist: "Lil Nas X ft. Billy Ray Cyrus",
        views: "1.4B",
        duration: "2:38",
        photoUrl: "oldtownroad.jpg",
      },
    ],
  },
  {
    title: "Kenny rogers Tour",
    name: "Kenny Rogers",
    img: "kennyrogers.jpg",
    views: "602m",
    album: [
      {
        title: "The Gambler",
        views: "121M",
        duration: "3:33",
        photoUrl: "thegambler.jpg",
      },
      {
        title: "Lady",
        views: "53M",
        duration: "3:52",
        photoUrl: "lady.jpg",
      },
      {
        title: "Islands in the Stream",
        views: "43M",
        duration: "4:10",
        photoUrl: "islandsinthestream.jpg",
      },
      {
        title: "Lucille",
        views: "12M",
        duration: "3:43",
        photoUrl: "lucille.jpg",
      },
      {
        title: "We've Got Tonight",
        views: "4.4M",
        duration: "3:50",
        photoUrl: "wevegottonight.jpg",
      },
    ],
  },
  {
    title: "Twice",
    name: "JYP",
    img: "twice.png",
    views: "800m",
    album: [
      {
        title: "TT",
        views: "701M",
        duration: "4:14",
        photoUrl: "tt.jpg",
      },
      {
        title: "Cheer Up",
        views: "577M",
        duration: "4:12",
        photoUrl: "cheerup.jpg",
      },
      {
        title: "Feel Special",
        views: "282M",
        duration: "3:28",
        photoUrl: "feelspecial.jpg",
      },
      {
        title: "Likey",
        views: "485M",
        duration: "3:42",
        photoUrl: "likey.jpg",
      },
      {
        title: "Fancy",
        views: "676M",
        duration: "3:38",
        photoUrl: "fancy.jpg",
      },
    ],
  },
];

console.log(item2[item2.length - 1]);
console.log(item2[item2.length - 2]);

function elementSelector(element) {
  const value = document.querySelector(`.${element}`);

  return value;
}

const sample = document.querySelectorAll(".created-playlist");

const xample = document.querySelectorAll(".created-playlist p");

const backdrop = elementSelector("backdrop");
const close = elementSelector("box-music-btn");
const imgLogo = elementSelector("box-music__logo");
const imgProfile = document.createElement("img");
const artistName = document.querySelector(".box-music__text h1");
const artistViews = document.querySelector(".box-music__text h3");
const artistMusic = elementSelector("music-list");

sample.forEach((data, iteration) => {
  data.addEventListener("click", () => {
    const value = xample[iteration].innerHTML;
    const nameUser = value.split(" ").splice(1, 3).join(" ");
    backdrop.classList.remove("display-none");

    const [tryError] = item2.filter((data) => data.name === nameUser);
    const { name, img, views, album = "haha" } = tryError;

    imgProfile.src = `./img/${img}`;
    imgLogo.appendChild(imgProfile);
    artistName.innerHTML = `${name}`;
    artistViews.innerHTML = `${views}  monthly listerners`;

    album.map((songs, index) => {
      const html = `  <div class="play-now">
      <div class="play-now-songlist">
        <div class="play-now-songlist-unit">
          <p>${index + 1}</p>
          <span class="material-symbols-outlined"> play_arrow </span>
        </div>

        <div class="play-now-img">
          <img src="./img/example.com/${songs.photoUrl}" alt="" />
        </div>

        <div class="play-now-title">
          <p>${songs.title}</p>

          <div class="play-now-title-box">
            <a>E</a>
          </div>
        </div>
      </div>
      <div class="amount-views">
        <p>${songs.views}</p>
      </div>
      <div class="duration-song">
        <span class="material-symbols-outlined"> favorite </span>
        <p>${songs.duration}</p>
        <span class="material-symbols-outlined"> more_horiz </span>
      </div>
    </div>`;

      artistMusic.insertAdjacentHTML("beforeend", html);
    });
  });
});

close.addEventListener("click", () => {
  backdrop.classList.add("display-none");
  const remove = document.querySelectorAll(".play-now");
  remove.forEach((element) => {
    element.remove();
  });
});
