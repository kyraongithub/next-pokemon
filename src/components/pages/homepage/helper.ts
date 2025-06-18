import pokemonServices from "../../../services/pokemon/service";

const getPokemons = async (pageParam: number = 10) => {
  try {
    return pokemonServices.getPokemonList(pageParam);
  } catch (error) {
    console.log(error);
    throw Error("Failed to get pokemons");
  }
};

export { getPokemons };
