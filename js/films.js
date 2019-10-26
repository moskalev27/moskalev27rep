const genre_1 = 'фантастика'
const genre_2 = 'боевик'
const genre_3 = 'приключения'
const genre_4 = 'фэнтези'
const genre_5 = 'драма'
const genre_6 = 'комедия'
const genre_7 = 'мультфильм'	

let start_film_1 = '10:00'
let start_film_2 = '12:00'
let start_film_3 = '14:00'
let start_film_4 = '16:00'

let film_name_1 = 'Человек-паук'
let film_name_2 = 'Собачья жизнь 2'
let film_name_3 = 'История игрушек 4'
let film_name_4 = 'Люди в черном: Интернэшнл'

genre_film_1 = genre_1 + ", " + genre_2 + ", " + genre_3
genre_film_2 = genre_4 + ", " + genre_5 + ", " + genre_6
genre_film_3 = genre_7 + ", " + genre_4 + ", " + genre_6
genre_film_4 = genre_1 + ", " + genre_2 + ", " + genre_6


let element_startOf_film_1 = document.getElementById('startOf_film_1')
let element_nameOf_film_1 = document.getElementById('nameOf_film_1')
let element_genreOf_film_1 = document.getElementById('genreOf_film_1')

let element_startOf_film_2 = document.getElementById('startOf_film_2')
let element_nameOf_film_2 = document.getElementById('nameOf_film_2')
let element_genreOf_film_2 = document.getElementById('genreOf_film_2')

let element_startOf_film_3 = document.getElementById('startOf_film_3')
let element_nameOf_film_3 = document.getElementById('nameOf_film_3')
let element_genreOf_film_3 = document.getElementById('genreOf_film_3')

let element_startOf_film_4 = document.getElementById('startOf_film_4')
let element_nameOf_film_4 = document.getElementById('nameOf_film_4')
let element_genreOf_film_4 = document.getElementById('genreOf_film_4')

element_startOf_film_1.innerHTML = start_film_1
element_nameOf_film_1.innerHTML = film_name_1
element_genreOf_film_1.innerHTML = genre_film_1

element_startOf_film_2.innerHTML = start_film_2
element_nameOf_film_2.innerHTML = film_name_2
element_genreOf_film_2.innerHTML = genre_film_2

element_startOf_film_3.innerHTML = start_film_3
element_nameOf_film_3.innerHTML = film_name_3
element_genreOf_film_3.innerHTML = genre_film_3

element_startOf_film_4.innerHTML = start_film_4
element_nameOf_film_4.innerHTML = film_name_4
element_genreOf_film_4.innerHTML = genre_film_4

// console.log()