import { CinemaFilter } from "../(pages)/cinemas/page";
import { BomboniereItemType } from "./BomboniereItem";
import { MovieItemType } from "./MovieItem";

type Filter = BomboniereItemType | MovieItemType | CinemaFilter;

export default Filter;
