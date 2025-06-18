"use client";

import { CardSearch } from "../../container/Card";
import useSearch from "./useSearch";

const SearchView = () => {
  const { pokemon, pokemonLoading, pokemonError, keyword, query } = useSearch();

  return (
    <div style={{ height: "calc(100vh - 196px)" }} className="md:px-[120px]">
      {pokemonLoading ? (
        <div className="text-black mt-[76px]">Loading</div>
      ) : (
        <div className="text-black mt-[76px] p-4">
          <p className="text-lg font-semibold pb-4">
            {pokemonError
              ? `No results found for for "${keyword}"`
              : `Search Result for "${keyword}"`}
          </p>
          {pokemonError ? (
            <div className="md:h-[400px] md:flex flex-col justify-center items-center">
              <img className="mx-auto" src="./not-found.png" alt="" />
            </div>
          ) : query === "" ? (
            <></>
          ) : (
            <CardSearch pokemon={pokemon} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchView;
