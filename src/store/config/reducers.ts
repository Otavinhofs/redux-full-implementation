import { combineReducers } from "@reduxjs/toolkit";
import { PokemonService } from "../services/pokemon";
import { PokemonSlice } from "../slices/selectedPokemon";

const reducer = combineReducers({
  // Services
  [PokemonService.reducerPath]: PokemonService.reducer,
  // Slices
  [PokemonSlice.reducerPath]: PokemonSlice.reducer,
});

export { reducer };

export type RootState = ReturnType<typeof reducer>;
