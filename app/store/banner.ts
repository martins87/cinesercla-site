import { create } from "zustand";
import { Banner } from "@/app/types/banner";
import { getBannerList } from "../services/banner";

type BannerStore = {
  bannerList: Banner[];
  hasFetched: boolean;
  fetchBannerList: () => Promise<void>;
  getBannerById: (id: string) => Banner | undefined;
};

export const useBannerStore = create<BannerStore>((set, get) => ({
  bannerList: [],
  hasFetched: false,
  fetchBannerList: async () => {
    if (get().hasFetched) return;

    const list = await getBannerList();

    set({ bannerList: list, hasFetched: true });
  },
  getBannerById: (id: string) => get().bannerList.find((b) => b._id === id),
}));
