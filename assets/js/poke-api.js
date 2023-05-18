
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.height =pokeDetail.height
    pokemon.weight = pokeDetail.weight
    
    const abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
    const [abilitie] = abilities
    pokemon.abilities = pokeDetail.abilities
    pokemon.ability = abilitie

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = pokemon.number, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

// pokeApi.getPokemonsDetails = (pokemon, limit = 5) => {
//     const url = `https://pokeapi.co/api/v2/pokemon?offset=${pokemon.number}&limit=${limit}`

//     return fetch(url)
//         .then((response) => response.json())
//         .then((jsonBody) => jsonBody.results)
//         .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
//         .then((detailRequests) => Promise.all(detailRequests))
//         .then((pokemonsDetails) => pokemonsDetails)
// }
