import "./App.css";
import { usePokemonQuery } from "./store/services/pokemon";
import { useDispatch, useSelector } from "react-redux";
import { PokemonAction, PokemonReducer } from "./store/slices/selectedPokemon";
import { IRootState } from "./store";

function App() {
  const { data: pokemonData } = usePokemonQuery();
  // esse seta
  const dispatch = useDispatch();
  // esse puxa
  const { selectedPokemonName } = useSelector(
    (state: IRootState) => state.pokemonSlice
  );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {pokemonData?.results.map((item) => (
        <p
          onClick={() => dispatch(PokemonAction.setSelectedPokemon(item.name))}
        >
          {item.name}
        </p>
      ))}
      <h1>{selectedPokemonName}</h1>
    </div>
  );
}

export default App;
