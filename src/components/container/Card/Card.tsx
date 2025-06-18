/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { PokemonInterface } from "@/interfaces/pokemon";
import usePokemon from "@/hooks/usePokemon";
import Link from "next/link";

const Card: React.FC<PokemonInterface> = ({ url }) => {
  const pokemonId = url.split("/").filter(Boolean).pop();
  const { pokemon } = usePokemon(pokemonId ?? "");

  return (
    <Link href={`/pokemon/${pokemonId}`}>
      <div className="h-[310px] p-3 text-neutral-900 flex flex-col border border-neutral-300 rounded-2xl mb-4">
        <div className="bg-neutral-100 rounded-full mx-auto">
          <img
            className="w-[200px]"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
        <div>
          <p className="text-neutral-500">{pokemonId?.padStart(3, "0")}</p>
          <p className="font-bold">{pokemon?.name}</p>
          <div className="flex gap-2">
            {pokemon?.abilities.map((ability: any) => (
              <p
                className="border border-neutral-300 px-2 rounded-md mt-4"
                key={ability.ability.name}
              >
                {ability.ability.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const CardSearch: React.FC<any> = ({ pokemon }) => {
  return (
    <div className="h-[310px] md:w-[288px] p-3 text-neutral-900 flex flex-col border border-neutral-300 rounded-2xl mb-4">
      <Link href={`/pokemon/${pokemon?.id}`}>
        <div className="bg-neutral-100 rounded-full mx-auto">
          <img
            className="w-[200px]"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
        <div>
          <p className="text-neutral-500">
            {pokemon?.id.toString()?.padStart(3, "0")}
          </p>
          <p className="font-bold">{pokemon?.name}</p>
          <div className="flex gap-2">
            {pokemon?.abilities.map((ability: any) => (
              <p
                className="border border-neutral-300 px-2 rounded-md mt-4"
                key={ability.ability.name}
              >
                {ability.ability.name}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Card, CardSearch };
