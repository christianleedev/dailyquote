fetch('https://zenquotes.io/api/today')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(quote => {
            const markup = `<div class='quote'>"${quote.q}"</div>`;
            document.querySelector('h1').insertAdjacentHTML('beforeend', markup);
            const markup2 = `<div class='author'>- ${quote.a}</div`;
            document.querySelector('h1').insertAdjacentHTML('beforeend', markup2);
        });
    })
    .catch(error => console.log(error));