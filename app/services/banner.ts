import { Banner } from "../types/banner";

export const getBannerList = async (): Promise<Banner[]> => {
  try {
    const response = await fetch("/api/banner/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch banner list. Status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving banner list", error);

    return [];
  }
};
