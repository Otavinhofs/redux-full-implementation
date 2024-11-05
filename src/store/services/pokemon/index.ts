import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../config/base-query";
import { PokemonResponse } from "./types";

export const PokemonService = createApi({
  // tem que ser difente de cada um se não ele se perde
  reducerPath: "pokemon-service",
  baseQuery,
  endpoints: (builder) => ({
    pokemon: builder.query<PokemonResponse, void>({
      query: () => ({
        method: "GET",
        url: "/pokemon",
      }),
    }),
  }),
});

export const { usePokemonQuery } = PokemonService;

//useAdminUserQuery aciona ao renderizar o componente
// useLazyAdminUserQuery espera uma ação para executar
