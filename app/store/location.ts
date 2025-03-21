import { create } from "zustand";
export const useLocation = create((set) => ({
  city: "BELO HORIZONTE",
  updateCity: (city: string) => set({ city: city }),
}));
