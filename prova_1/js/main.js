import tmdb from "./tmdbAPI.js";

window.addEventListener("DOMContentLoaded", () => {

    const filmPainel = document.getElementById("filmPainel");

    showFilms();

    
    

});

const showFilms = async  () => {
    
    const vetFilms = await tmdb.getFilms();
    const images = "https://image.tmdb.org/t/p/original";
    console.log(vetFilms);

    if(vetFilms.results.length > 0) {

        vetFilms.results.forEach(async (film) => {
            const genreData = await tmdb.getGenres(film.id);
            console.log(genreData.genres);

            const banner = document.createElement("div");
            const img = document.createElement("img");
            const titulo = document.createElement("h3");
            const descricao = document.createElement("p");
            const genero = document.createElement("p");
            const dataLanc = document.createElement("p");
            const avaliacao = document.createElement("i");
            const star = document.createElement("i");

            banner.className = "banner";
            img.src = images + film.poster_path;
            img.className = "filmImage";
            titulo.textContent = film.title;
            descricao.textContent = film.overview.substring(0, 200) + "...";
            genero.textContent = genreData.genres.map(g => g.name).join(", ");
            genero.className = "genres"
            dataLanc.textContent = "Lançamento: " + film.release_date;
            star.className = "bx bxs-star";
            star.style.color = "#FFD700";
            avaliacao.textContent = film.vote_average.toFixed(1);

            filmPainel.appendChild(banner);
            banner.appendChild(img);
            banner.appendChild(titulo);
            banner.appendChild(descricao);
            banner.appendChild(genero);
            banner.appendChild(dataLanc);
            banner.appendChild(star)
            banner.appendChild(avaliacao);
            
        });
    }

    
}
