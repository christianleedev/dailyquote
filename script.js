/*fetch('https://animechan.vercel.app/api/random')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(anime => {
            const markup = `<div class='quote'>"${anime.quote}"</div>`;
            document.querySelector('h1').insertAdjacentHTML('beforeend', markup);
            const markup2 = `<div class='author'>- ${anime.character}</div`;
            document.querySelector('h1').insertAdjacentHTML('beforeend', markup2);
        });
    })
    .catch(error => console.log(error));*/

fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((anime) => {
        const markup = `<div class='quote'>"${anime.quote}"</div>`;
        document.querySelector('h1').insertAdjacentHTML('beforeend', markup);
        const markup2 = `<div class='author'>- ${anime.character}</div`;
        document.querySelector('h1').insertAdjacentHTML('beforeend', markup2);
        const markup3 = `<div class='anime'>${anime.anime}</div`;
        document.querySelector('h1').insertAdjacentHTML('beforeend', markup3);
    });