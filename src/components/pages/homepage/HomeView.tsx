"use client";

import type { PokemonInterface } from "@/interfaces/pokemon";
import { Card } from "@/components/container/Card";
import Searchbar from "@/components/container/Searchbar";
import useHome from "./useHome";

const HomeView: React.FC = () => {
  const { pokemons, isLoading, ref, isFetchingNextPage, hasNextPage } =
    useHome();

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-accent-yellow relative h-screen"
        style={{
          backgroundImage: "url('background-hero.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex flex-col items-center pt-35 justify-center text-center gap-3.5 mx-auto px-4 max-w-[686px]">
          <div>
            <img src="./pokemon-title.svg" alt="pokemon-title" />
          </div>
          <h1 className="text-display-sm text-neutral-900 md:text-display-2xl font-bold">
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p className="text-sm font-medium md:text-md text-neutral-900">
            Train, Battle, and Collect Your Favorites!
          </p>
          <Searchbar />
        </div>
        <div className="absolute -bottom-0.5 left-0 w-full z-10">
          <img src="./cloud.png" alt="cloud" className="w-full object-cover" />

          <img
            src="./hero-left-pokemon.png"
            alt="charizard"
            className="absolute bottom-0 left-4 md:left-20 -z-1"
            style={{
              width: "clamp(10.06rem, 19.2vw, 17.38rem)",
              height: "clamp(10.06rem, 19.2vw, 17.38rem)",
              left: "clamp(1.19rem, 3.6vw, 3.19rem)",
            }}
          />
          <img
            src="./hero-right-pokemon.png"
            alt="pikachu"
            className="absolute bottom-0 right-4 md:right-20 -z-1"
            style={{
              width: "clamp(10.06rem, 19.2vw, 17.38rem)",
              height: "clamp(10.06rem, 19.2vw, 17.38rem)",
              right: "clamp(1.19rem, 3.6vw, 3.19rem)",
            }}
          />
        </div>
      </div>
      {/* pokemon list section */}
      <div className="px-4 mt-4">
        <h1 className="text-display-sm text-neutral-900 md:text-display-2xl font-bold">
          List Pokemon
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!isLoading &&
            pokemons?.map((pokemon: PokemonInterface) => (
              <Card key={pokemon.url} url={pokemon.url} />
            ))}
        </div>
      </div>
      {/* infinite scroll trigger */}
      <div ref={ref} className="h-10 flex justify-center items-center">
        {isFetchingNextPage && (
          <div className="text-gray-400">Loading more pokemons...</div>
        )}
        {!hasNextPage && (
          <div className="text-gray-400">No more pokemons to load</div>
        )}
      </div>
    </>
  );
};
export default HomeView;
