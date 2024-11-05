import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  selectedPokemonName: string;
}

const initialState: PokemonState = {
  selectedPokemonName: "",
};

export const PokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemonName = action.payload;
    },
  },
});

export const PokemonReducer = PokemonSlice.reducer;
export const PokemonAction = PokemonSlice.actions;
