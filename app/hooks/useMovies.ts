import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/app/services/movies";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    staleTime: 60000,
  });
};
