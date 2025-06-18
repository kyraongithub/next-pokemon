import { api } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";
import { pokemonService } from "../endpoints";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const response = await api.get(`${pokemonService.getPokemon}/${id}`);
  const { data } = response;
  return NextResponse.json({ ...data });
}
