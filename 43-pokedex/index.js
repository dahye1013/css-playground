const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

/**
 * @reference https://pokeapi.co/
 */

const poke_container = document.getElementById('poke-container');
const pokemon_count = Array.from({ length: 15 });
const App = () => {
  const getPokemons = async () => {
    for await (const index of pokemon_count.keys()) {
      const pokemon = await fetchPokemon(index);

      createPokemonCard(pokemon);
    }
  };

  const fetchPokemon = async index => {
    const url = `https://pokeapi.co/api/v2/pokemon/${index + 1}`;
    const res = await fetch(url);
    return res.json();
  };

  const createPokemonCard = pokemon => {
    const $pokemon = document.createElement('div');
    $pokemon.classList.add('pokemon');

    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const pokeTypes = pokemon.types.map(type => type.type.name);
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);
    const color = colors[type];
    $pokemon.style.backgroundColor = color;

    const pokemonTemplate = `
        <div class="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
        </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${pokemonName}</h3>
          <small class="type">Type: <span>grass</span></small>
        </div>`;

    $pokemon.innerHTML = pokemonTemplate;
    poke_container.appendChild($pokemon);
  };

  getPokemons();
};

App();
