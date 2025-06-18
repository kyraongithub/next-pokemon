"use client";

import { useQuery } from "@tanstack/react-query";
import pokemonServices from "../services/pokemon/service";
import { useCallback } from "react";

const usePokemon = (id: string) => {
  const getDetailPokemon = useCallback(async () => {
    try {
      return await pokemonServices.getDetailPokemon(id);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isErrorPokemon,
    error: errorPokemon,
  } = useQuery({
    queryFn: getDetailPokemon,
    queryKey: ["pokemon-detail", id],
  });

  const getBarColor = (value: number) => {
    if (value >= 70) return "bg-green-500";
    if (value >= 50) return "bg-yellow-400";
    return "bg-red-500";
  };

  const statNameValidator = (name: string) => {
    const nameArr = name.split("-");
    if (nameArr.length === 1) return name;

    return `Sp. ${nameArr[1]}`;
  };

  return {
    pokemon,
    isLoadingPokemon,
    isErrorPokemon,
    errorPokemon,
    getBarColor,
    statNameValidator,
  };
};

export default usePokemon;
