let films = [
  (film1 = {
    name: "Человек-паук",
    start: "10:00",
    genre: [0, 1, 2],
    hire: true,
    new: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }),
  (film2 = {
    name: "Собачья жизнь 2",
    start: "12:00",
    genre: [3, 4, 5],
    hire: true,
    new: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }),
  (film3 = {
    name: "История игрушек 4",
    start: "14:00",
    genre: [6, 3, 5],
    hire: true,
    new: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }),
  (film4 = {
    name: "Люди в чёрном-Интернэшнл",
    start: "16:00",
    genre: [0, 1, 5],
    hire: true,
    new: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }),
  (film5 = {
    name: "ОНО",
    start: "18:00",
    genre: [5],
    hire: false,
    new: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/images/Ono.jpg",
    fb: "https://fb.com",
    twitter: "https://twitter.com",
    behance: "https://www.behance.net",
    dribbble: "https://dribbble.com"
  }),
  (film6 = {
    name: "Сплит",
    start: "20:00",
    genre: [5],
    hire: false,
    new: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.6",
    image: "/images/split.jpg",
    fb: "https://fb.com",
    twitter: "https://twitter.com",
    behance: "https://www.behance.net",
    dribbble: "https://dribbble.com"
  }),
  (film7 = {
    name: "Выразительный Java Script",
    start: "19:00-21:00",
    genre: [7],
    hire: false,
    new: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.7",
    image: "/images/JSForNews.jpg",
    fb: "https://vk.com",
    twitter: "https://vk.com",
    behance: "https://www.vk.net",
    dribbble: "https://vk.com"
  })
];

const genres = [
  "Фонтастика", // 0
  "Боевик", // 1
  "Приключения", // 2
  "Фентези", // 3
  "Драма", // 4
  "Комедия", // 5
  "Мультфильм", // 6
  "Ужасы" // 7
];
// console.log("жанры", genres);

let filmsHire = [];

let filmsNew = [];

for (let i = 0; i < films.length; i++) {
  if (films[i].hire === true) {
    filmsHire.push(films[i]);
  }
  if (films[i].hire === false && films[i].new === true) {
    filmsNew.push(films[i]);
  }
}

// console.log('В прокате', filmsHire);
// console.log('Скоро в кино', filmsNew);

const film = {
  getLinkFB: function() {
    return this.fb;
  },
  getLinkTwitter: function() {
    return this.twitter;
  },
  getLinkBehance: function() {
    return this.behance;
  },
  getLinkDribbble: function() {
    return this.dribbble;
  },

  getDescription: function() {
    return this.description;
  },
  getCover: function() {
    return this.image;
  },
  getName: function() {
    // console.log('this.name', this.name);
    return this.name;
  },
  getStart: function() {
    return this.start;
  },
  getGenre: function() {
    const genresFilm = this.genre;
    let arrGenres = [];
    for (let i = 0; i < genresFilm.length; i++) {
      arrGenres.push(genres[genresFilm[i]]);
    }
    let strGenres = arrGenres.join(", ");
    return strGenres;
    // console.log("Жанры фильмов:", strGenres);
  }
};

for (let i = 0; i < filmsHire.length; i++) {
  const filmStart = film.getStart.bind(filmsHire[i])();
  const filmName = film.getName.bind(filmsHire[i])();
  const filmGenre = film.getGenre.bind(filmsHire[i])();
  let filmsHireHTML = document.getElementById("filmsHire");

  // console.log('filmsHireHTML', filmsHireHTML);

  let filmHTML = `
  <td id="startOf_film_${i}" class="time">${filmStart}</td>
  <td class="movie-name ">
    <a
      id="nameOf_film_${i}"
      href="https://www.kinopoisk.ru/film/838/"
      target="_blank"
      title="Перейти на Кинопоиск.ру"
    ></a>${filmName}
  </td>
  <td id="genreOf_film_${i}" class="genre">${filmGenre}</td>
  <td class="movie_svg">
    <a href="#" title="Добавить в корзину">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="2.5rem"
        height="2.5rem"
        viewBox="0 0 50 50"
      >
        <path
          fill-rule="evenodd"
          fill="rgb(255, 255, 255)"
          d="M16.505,32.994 C7.393,32.994 0.005,25.606 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.606 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.778 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z"
        />
      </svg>
    </a>
  </td>
`;
  let tr = document.createElement("tr");
  tr.innerHTML = filmHTML;
  filmsHireHTML.appendChild(tr);
}

for (let i = 0; i < filmsNew.length; i++) {
  const filmLinkFB = film.getLinkFB.bind(filmsNew[i])();
  const filmLinkTwitter = film.getLinkTwitter.bind(filmsNew[i])();
  const filmLinkBehance = film.getLinkBehance.bind(filmsNew[i])();
  const filmLinkDribbble = film.getLinkDribbble.bind(filmsNew[i])();

  const filmCover = film.getCover.bind(filmsNew[i])();
  const filmName = film.getName.bind(filmsNew[i])();
  const filmDescription = film.getDescription.bind(filmsNew[i])();
  const filmGenre = film.getGenre.bind(filmsNew[i])();
  let filmsNewHTML = document.getElementById("films-new-container");

  let filmHTML = `
  <div class="block-4__movies block-4__movies-item ">
                <div class="block-4__movies-inner item">
                  <div class="block-4__poster">
                    <img src="${filmCover}" alt="Название фильма" />
                  </div>
                  <div class="block-4__movies_description">
                    <p class="block-4__movies_main-text">${filmName}</p>
                    <div class="block-4__movies_main-text">${filmGenre}</div>
                    <hr class="block-4__movies_hr" />
                    <p class="block-4__movies_plain-text">
                      ${filmDescription}
                    </p>
                    <div>
                      <a href="${filmLinkFB}" target="_blank" title="Фейсбук"><svg
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem"
                          height="2rem" viewBox="0 0 60 60">
                          <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="34px"
                              height="34px">
                              <feOffset in="SourceAlpha" dx="0" dy="1" />
                              <feGaussianBlur result="blurOut" stdDeviation="1" />
                              <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                              <feComposite operator="atop" in="floodOut" in2="blurOut" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          <g>
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                              d="M16.350,30.764 C7.872,30.764 1.000,23.882 1.000,15.393 C1.000,6.903 7.872,0.021 16.350,0.021 C24.828,0.021 31.700,6.903 31.700,15.393 C31.700,23.882 24.828,30.764 16.350,30.764 ZM16.721,6.969 C13.254,6.969 14.044,11.088 13.929,12.590 C13.929,12.601 11.809,12.590 11.809,12.590 L11.809,15.384 L13.922,15.384 L13.922,25.220 L17.434,25.220 L17.426,15.384 L19.779,15.384 L20.240,12.574 L17.434,12.605 C17.434,10.610 17.280,9.799 18.445,9.799 C18.549,9.799 20.251,9.795 20.251,9.795 L20.255,6.969 L16.721,6.969 Z" />
                          </g>
                        </svg></a>
                      <a href="${filmLinkTwitter}" target="_blank" title="Твиттер"><svg
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem"
                          height="2rem" viewBox="0 0 60 60">
                          <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="34px"
                              height="34px">
                              <feOffset in="SourceAlpha" dx="0" dy="1" />
                              <feGaussianBlur result="blurOut" stdDeviation="1" />
                              <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                              <feComposite operator="atop" in="floodOut" in2="blurOut" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          <g>
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                              d="M16.537,30.747 C8.060,30.747 1.187,23.865 1.187,15.375 C1.187,6.885 8.060,0.003 16.537,0.003 C25.015,0.003 31.887,6.885 31.887,15.375 C31.887,23.865 25.015,30.747 16.537,30.747 ZM24.698,13.855 C23.512,9.722 20.664,9.722 20.664,9.722 C20.664,9.722 21.873,9.034 21.838,8.615 C21.466,8.348 20.720,8.883 20.657,8.883 C20.845,8.751 20.733,8.373 20.489,8.231 C20.129,8.266 19.815,8.930 19.815,8.930 C19.815,8.930 19.638,8.604 19.478,8.604 C17.571,9.128 16.228,13.535 16.234,13.541 C10.007,9.332 9.595,10.141 9.595,10.152 C9.106,11.247 11.001,12.633 11.001,12.633 L10.460,12.649 C10.460,12.649 9.663,12.623 9.837,13.192 C10.015,13.920 10.959,14.674 10.967,14.682 C11.432,14.903 12.013,14.693 12.013,14.693 C12.013,14.693 11.397,15.016 11.007,15.260 C10.364,15.675 10.826,16.044 10.896,16.114 C11.733,17.011 13.048,16.953 13.048,16.953 C13.048,16.953 12.437,17.686 12.432,17.965 C12.432,18.419 12.839,18.699 12.873,18.734 C13.237,18.984 13.776,19.013 13.780,19.013 C10.411,22.588 6.351,18.992 6.351,18.979 C6.804,21.598 10.653,24.125 17.420,23.147 C22.908,22.274 24.663,16.254 24.663,16.254 C24.663,16.254 26.931,16.382 27.187,15.031 C26.477,15.159 25.454,14.950 25.454,14.950 C25.454,14.950 27.198,14.193 27.280,13.285 C26.256,14.076 24.733,13.855 24.698,13.855 Z" />
                          </g>
                        </svg></a>
                      <a href="${filmLinkBehance}" target="_blank" title="Behance"><svg
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem"
                          height="2rem" viewBox="0 0 60 60">
                          <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="35px"
                              height="34px">
                              <feOffset in="SourceAlpha" dx="0" dy="1" />
                              <feGaussianBlur result="blurOut" stdDeviation="1" />
                              <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                              <feComposite operator="atop" in="floodOut" in2="blurOut" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          <g>
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                              d="M16.806,30.764 C8.328,30.764 1.456,23.882 1.456,15.393 C1.456,6.903 8.328,0.021 16.806,0.021 C25.283,0.021 32.156,6.903 32.156,15.393 C32.156,23.882 25.283,30.764 16.806,30.764 ZM16.969,12.741 C16.969,9.268 13.194,9.547 13.194,9.547 L7.596,9.549 L7.603,21.872 L12.826,21.837 C12.826,21.837 17.320,22.183 17.360,18.148 C17.360,15.798 15.465,15.234 15.465,15.234 C15.465,15.234 16.969,14.689 16.969,12.741 ZM25.305,10.217 L20.513,10.217 L20.513,11.592 L25.305,11.592 L25.305,10.217 ZM22.854,12.325 C18.267,12.325 18.493,17.138 18.493,17.138 C18.493,17.138 18.237,21.877 22.944,21.877 C26.568,21.877 27.094,18.885 27.094,18.885 L24.763,18.885 C24.763,18.885 24.387,19.940 23.004,19.924 C20.733,19.924 20.809,17.726 20.809,17.726 L27.199,17.695 C27.199,17.695 27.861,12.325 22.854,12.325 ZM22.839,14.292 C24.808,14.292 24.854,16.160 24.854,16.160 L20.854,16.190 C20.854,16.190 21.004,14.292 22.839,14.292 ZM12.723,19.704 L10.117,19.694 L10.107,16.410 C10.107,16.410 11.692,16.421 12.758,16.421 C12.754,16.421 14.768,16.280 14.768,17.947 C14.768,19.944 12.723,19.704 12.723,19.704 ZM12.743,14.398 L10.112,14.413 L10.112,11.687 L12.385,11.699 C12.385,11.699 14.518,11.416 14.518,13.012 C14.518,14.609 12.743,14.398 12.743,14.398 Z" />
                          </g>
                        </svg></a>
                      <a href="${filmLinkDribbble}" target="_blank" title="Dribble"><svg
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem"
                          height="2rem" viewBox="0 0 60 60">
                          <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="34px"
                              height="34px">
                              <feOffset in="SourceAlpha" dx="0" dy="1" />
                              <feGaussianBlur result="blurOut" stdDeviation="1" />
                              <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                              <feComposite operator="atop" in="floodOut" in2="blurOut" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          <g>
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                              d="M16.644,31.009 C8.166,31.009 1.294,24.126 1.294,15.636 C1.294,7.146 8.166,0.265 16.644,0.265 C25.121,0.265 31.994,7.146 31.994,15.636 C31.994,24.126 25.121,31.009 16.644,31.009 ZM16.546,3.731 C9.946,3.731 4.595,9.100 4.595,15.724 C4.595,22.347 9.946,27.716 16.546,27.716 C23.147,27.716 28.498,22.347 28.498,15.724 C28.498,9.100 23.147,3.731 16.546,3.731 ZM19.404,15.210 C19.132,14.525 18.850,13.854 18.553,13.209 C22.130,11.829 24.182,9.458 24.182,9.458 C24.182,9.458 26.206,11.638 26.388,15.193 C26.388,15.178 22.467,14.623 19.404,15.210 ZM14.049,6.157 C14.049,6.157 18.845,4.626 22.988,8.237 C20.753,10.510 17.771,11.625 17.771,11.625 C16.451,8.648 14.049,6.157 14.049,6.157 ZM6.905,13.641 C6.905,13.641 7.620,9.210 12.104,6.893 C14.554,9.848 15.825,12.313 15.825,12.313 C15.825,12.313 12.168,13.504 6.905,13.641 ZM17.441,15.644 C17.441,15.644 12.774,16.496 9.041,22.138 C6.368,19.036 6.702,15.348 6.702,15.329 C13.430,15.117 16.642,13.880 16.642,13.880 L17.441,15.644 ZM18.121,17.369 C19.233,19.948 20.084,24.955 20.084,24.955 C20.084,24.955 15.249,27.144 10.494,23.529 C10.502,23.529 13.193,18.747 18.121,17.369 ZM26.331,16.982 C25.687,21.930 21.967,23.990 21.967,23.990 C21.345,20.359 20.052,16.938 20.052,16.938 C20.052,16.938 23.030,16.445 26.331,16.982 Z" />
                          </g>
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
  `;
  filmsNewHTML.innerHTML += filmHTML;
}

// const films = [
//   ["10:00", "Человек-паук", 0],
//   ["12:00", "Собачья жизнь 2", 2],
//   ["14:00", "История игрушек 4", 6],
//   ["16:00", "Люди в черном: Интернэшнл", 3]
// ];

// const genre = [
//   "фантастика",
//   "боевик",
//   "приключения",
//   "фэнтези",
//   "драма",
//   "комедия",
//   "мультфильм"
// ];
// const elementTable = document.getElementById('movie-table');

// for (let i = 0; i < films.length; i++) {

//   let genreId = films [i][2];

// let row = `
// <tr class="film_row">
//   <td id = "startOf_film_1" class="time">
//     ${films[i][0]}
//   </td>
//   <td  class="movie-name">
//     <a id = "nameOf_film_1" href="https://www.kinopoisk.ru/film/838/" target="_blank" title="Перейти на Кинопоиск.ру">
//       ${films[i][1]}
//     </a>
//   </td>
//   <td id = "genreOf_film_1" class="genre">
//     ${genre[genreId]}
//   </td>
//   <td>
//     <a href="#" title="Добавить в корзину">
//       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
//         width="2.5rem" height="2.5rem" viewBox="0 0 50 50">
//         <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
//           d="M16.505,32.994 C7.393,32.994 0.005,25.606 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.606 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.778 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
//       </svg>
//     </a>
//   </td>
// </tr>
// `;
// elementTable.innerHTML += row

//   // console.log(i);

// function urlGenerator(domain) {
//   let _protocol = "http";
//   return {
//     setProtocol: function(protocol) {
//       _protocol = protocol;
//     },
//     get: function(url) {
//       return `${_protocol}://${url}.${domain}`;
//     }
//   };
// }

// const ruDomain = urlGenerator("ru");
// console.log(ruDomain.get("mail"));
// ruDomain.setProtocol("https");
// console.log(ruDomain.get("yandex"));

// const comDomain = urlGenerator("com");
// console.log(comDomain.get("google"));
