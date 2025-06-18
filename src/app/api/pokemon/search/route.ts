import { api } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";
import { pokemonService } from "../endpoints";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const response = await api.get(`${pokemonService.getPokemon}/${name}`);
  const { data } = response;
  return NextResponse.json({ ...data });
}
