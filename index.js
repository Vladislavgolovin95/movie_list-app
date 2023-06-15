const inputMovieNode = document.getElementById('inputMovie');
const moviesNode = document.getElementById('moviesList');
const addMovieBtn = document.getElementById('addBtn');

const moviesList = document.querySelector('#moviesList');

const movies = [];

// Получаем данные с поля ввода пользователя
function getFromMovie() {
    const nameMovie = inputMovieNode.value;
    return nameMovie;
};

// Отправляем данные в массив
function addMovie(nameMovie) {
    const movie = nameMovie

    if (movie.trim() === '') {
        alert('Введите название фильма!');
    } else {
        movies.push(movie);
    }

    return movie;
};

// Очищаем поле ввода
function clearInput() {
    inputMovieNode.value = '';
}

// Получаем данные из масива
function getMovies() {
    return movies;
};

// Обрабатываем данные из массива и отрисовываем блок с фильмами 
function renderMovies() {
    const movies = getMovies();
    let moviesHTML = '';

    for (let i = 0; i < movies.length; i++) {
        moviesHTML += `
        <label id="${i}" class="checkbox">
            <input 
                id="movieCheckbox-${i}"
                class="real-checkbox"
                type="checkbox" 
            >
            <span class="custom-checkbox"></span>
            <span id='nameMovie' class='nameMovie'>${movies[i]}</span>
            <button id="${i}" class="btnCloseCheckbox"></button>
        </label>
        `
    }
     
    moviesNode.innerHTML = moviesHTML;

    const checkboxes = document.querySelectorAll('.real-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', (e) => {
            const label = e.target.closest('label');
            label.classList.toggle('active-checkbox');
        });
    });
};

// Обработчики событий

addMovieBtn.addEventListener('click', function() {
    const movieFromUser = getFromMovie();
    addMovie(movieFromUser);
    renderMovies();
    clearInput();
});

moviesList.addEventListener('click', (event) => {
    if (event.target.classList.contains('btnCloseCheckbox')) {
        movies.splice(event.target.id,1)
        renderMovies();
    };
});