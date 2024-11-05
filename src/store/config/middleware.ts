// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { PokemonService } from "../services/pokemon";

//apenas os services
export default (getDefaultMiddleware: any) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false,
  }).concat(PokemonService.middleware);

  return middleware;
};
