import './css/style.css';
import cardTpl from './templates/pokemon-card.hbs';


fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        const markUp = cardTpl(pokemon);
        console.log(markUp);
    })
    .catch(error => {
        console.log(error);
    });


