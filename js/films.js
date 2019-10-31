const films = [
  ["10:00", "Человек-паук", 0],
  ["12:00", "Собачья жизнь 2", 2],
  ["14:00", "История игрушек 4", 6],
  ["16:00", "Люди в черном: Интернэшнл", 3]
];

const genre = [
  "фантастика",
  "боевик",
  "приключения",
  "фэнтези",
  "драма",
  "комедия",
  "мультфильм"
];
const elementTable = document.getElementById('movie-table');

for (let i = 0; i < films.length; i++) {

  let genreId = films [i][2];

let row = `
<tr class="film_row">
  <td id = "startOf_film_1" class="time">
    ${films[i][0]}
  </td>
  <td  class="movie-name">
    <a id = "nameOf_film_1" href="https://www.kinopoisk.ru/film/838/" target="_blank" title="Перейти на Кинопоиск.ру">
      ${films[i][1]}
    </a>
  </td>
  <td id = "genreOf_film_1" class="genre">
    ${genre[genreId]}
  </td>
  <td>
    <a href="#" title="Добавить в корзину">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="2.5rem" height="2.5rem" viewBox="0 0 50 50">
        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
          d="M16.505,32.994 C7.393,32.994 0.005,25.606 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.606 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.778 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
      </svg>
    </a>
  </td>
</tr>
`;
elementTable.innerHTML += row




  console.log(i);
}