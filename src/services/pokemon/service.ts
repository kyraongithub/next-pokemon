import { localApi } from "../api-local";

const getPokemonList = async (pageParams: number = 10) => {
  const response = await localApi.get(
    `/api/pokemon?limit=10&offset=${pageParams}`
  );
  const { data } = response;
  return { ...data, pageParams };
};

const getDetailPokemon = async (id: string) => {
  const response = await localApi.get(`/api/pokemon/${id}`);
  const { data } = response;
  return data;
};

const getPokemonByName = async (name: string) => {
  const response = await localApi.get(`/api/pokemon/${name}`);
  const { data } = response;
  return data;
};

const pokemonServices = {
  getPokemonList,
  getDetailPokemon,
  getPokemonByName,
};

export default pokemonServices;
