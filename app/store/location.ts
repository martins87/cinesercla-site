import { create } from "zustand";

type LocationStore = {
  city: string;
  idCinema: string;
  updateCity: (city: string) => void;
  updateCinema: (id: string) => void;
};

export const useLocation = create<LocationStore>((set) => ({
  city: "BELO HORIZONTE",
  idCinema: "1",
  updateCity: (city: string) => set({ city: city }),
  updateCinema: (id: string) => set({ idCinema: id }),
}));
