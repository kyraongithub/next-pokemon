"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { getPokemonByName } from "./helper";
import { useQuery } from "@tanstack/react-query";

const useSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialQuery = searchParams.get("name") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [keyword, setKeyword] = useState(initialQuery);

  useEffect(() => {
    const currentNameParam = searchParams.get("name");
    if (query === "" && currentNameParam !== null) {
      router.replace(pathname);
    } else if (query !== "" && currentNameParam !== query) {
      router.replace(`${pathname}?name=${query}`);
    }
  }, [query, router, pathname, searchParams]);

  useEffect(() => {
    const currentNameParam = searchParams.get("name") ?? "";
    if (keyword !== currentNameParam) {
      setKeyword(currentNameParam);
      setQuery(currentNameParam);
    }
  }, [searchParams, keyword]);

  const getPokemonList = useCallback(async () => {
    if (!query) {
      return null;
    }
    const response = await getPokemonByName(query);
    return response;
  }, [query]);

  const {
    data: pokemon,
    isError: pokemonError,
    isLoading: pokemonLoading,
  } = useQuery({
    queryFn: getPokemonList,
    queryKey: ["pokemon-list", query],
    enabled: !!query,
    retry: false,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(keyword);
  };

  return {
    pokemon,
    pokemonLoading,
    pokemonError,
    keyword,
    query,
    setKeyword,
    handleSearch,
  };
};

export default useSearch;
