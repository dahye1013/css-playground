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

    const pokemonTemplate = `
        <div class="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
        </div>
        <div class="info">
          <span class="number">#001</span>
          <h3 class="name">${pokemonName}</h3>
          <small class="type">Type: <span>grass</span></small>
        </div>`;

    $pokemon.innerHTML = pokemonTemplate;
    poke_container.appendChild($pokemon);
  };

  getPokemons();
};

App();
