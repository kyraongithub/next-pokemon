import { api } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";
import { pokemonService } from "./endpoints";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";

  const response = await api.get(
    `${pokemonService.getPokemon}?limit=${limit}&offset=${offset}`
  );
  const { data } = response;
  return NextResponse.json({ ...data });
}
