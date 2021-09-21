fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        const text = document.querySelector('.js-text');
        text.insertAdjacentHTML('afterbegin', pokemon.name);
        document.querySelector('.js-img').src = pokemon.sprites.front_default;
    });

const container = document.querySelector('.js-container');

