import { create } from "zustand";

export const useLocation = create((set) => ({
  city: "BELO HORIZONTE",
  idCinema: "1",
  updateCity: (city: string) => set({ city: city }),
  updateCinema: (id: string) => set({ idCinema: id }),
}));
