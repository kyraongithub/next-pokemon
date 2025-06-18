import { api } from '../api';
import { pokemonService } from './endpoints';

const getPokemonList = async (pageParams: number = 10) => {
  const response = await api.get(
    `${pokemonService.getPokemon}?limit=10&offset=${pageParams}`
  );
  const { data } = response;
  return { ...data, pageParams };
};

const getDetailPokemon = async (id: string) => {
  const response = await api.get(`${pokemonService.getPokemon}/${id}`);
  const { data } = response;
  return data;
};

const getPokemonByName = async (name: string) => {
  const response = await api.get(`${pokemonService.getPokemon}/${name}`);
  const { data } = response;
  return data;
};

const pokemonServices = {
  getPokemonList,
  getDetailPokemon,
  getPokemonByName,
};

export default pokemonServices;
