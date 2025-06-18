import { api } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";
import { pokemonService } from "../endpoints";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const response = await api.get(`${pokemonService.getPokemon}/${id}`);
  const { data } = response;
  return NextResponse.json({ ...data });
}
