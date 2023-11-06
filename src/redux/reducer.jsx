import { cardsReducer } from "./services/cardsSlice";
import { filterReducer } from "./services/filterSlice";


export const reducer = ({
  filter: filterReducer,
  items: cardsReducer,
});