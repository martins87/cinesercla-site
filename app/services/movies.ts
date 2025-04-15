import { TMDBMovie } from "@/app/types/Movie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("Missing API_BASE_URL in environment variables.");
}

export const getMovies = async (): Promise<TMDBMovie[]> => {
  try {
    const response = await fetch("/api/movies/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movie list. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving movie list", error);

    return [];
  }
};
