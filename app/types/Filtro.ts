import { CinemaFilter } from "../(pages)/cinemas/page";
import { BomboniereItemType } from "./BomboniereItem";
import { MovieItemType } from "./MovieItem";

export type Filter = BomboniereItemType | MovieItemType | CinemaFilter;
