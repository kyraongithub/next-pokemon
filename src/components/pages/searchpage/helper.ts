import pokemonServices from '../../../services/pokemon/service';

const getPokemonByName = async (name: string) => {
  try {
    return await pokemonServices.getPokemonByName(name);
  } catch (error) {
    console.log(error);
    throw Error('Failed to get pokemon by name');
  }
};

export { getPokemonByName };
