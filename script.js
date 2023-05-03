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

/*fetch("https://quote-garden.onrender.com/api/v3/quotes/random?genre=motivational")
    .then((response) => response.json())
    .then((quote) => {
        const markup = `<div class='quote'>"${quote.data[0].quoteText}"</div>`;
        document.querySelector('h1').insertAdjacentHTML('beforeend', markup);
        const markup2 = `<div class='author'>- ${quote.data[0].quoteAuthor}</div`;
        document.querySelector('h1').insertAdjacentHTML('beforeend', markup2);
    });*/

    fetch("https://quote-garden.onrender.com/api/v3/quotes/random?genre=motivational")
    .then((response) => response.json())
    .then((quote) => {
        const quoteText = quote.data[0].quoteText;
        const quoteAuthor = quote.data[0].quoteAuthor;
    
        const quoteElement = document.createElement('div');
        quoteElement.classList.add('quote', 'fade-in');
        quoteElement.textContent = `"${quoteText}"`;
    
        const authorElement = document.createElement('div');
        authorElement.classList.add('author', 'fade-in');
        authorElement.textContent = `- ${quoteAuthor}`;
    
        const containerElement = document.querySelector('h1');
        containerElement.appendChild(quoteElement);
        containerElement.appendChild(authorElement);

        setTimeout(() => {
            quoteElement.classList.add('fade-in');
            authorElement.classList.add('fade-in');
        }, 100);
    });
