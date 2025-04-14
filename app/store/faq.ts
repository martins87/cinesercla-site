import { create } from "zustand";
import { Faq } from "../types/FAQ";
import { getFaqList } from "@/lib/db/faq";

type FaqStore = {
  faqList: Faq[];
  hasFetched: boolean;
  fetchFaqList: () => Promise<void>;
};

export const useFaqStore = create<FaqStore>((set, get) => ({
  faqList: [],
  hasFetched: false,
  fetchFaqList: async () => {
    if (get().hasFetched) return;

    const list = await getFaqList();

    set({ faqList: list, hasFetched: true });
  },
}));
