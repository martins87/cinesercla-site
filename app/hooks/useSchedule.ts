import { useQuery } from "@tanstack/react-query";

import { getSchedule } from "../services/schedule";

export const useSchedule = (idUnidade: string, idFilme: string) => {
  return useQuery({
    queryKey: ["schedule", idUnidade, idFilme],
    queryFn: () => getSchedule(idUnidade, idFilme),
    staleTime: 60000,
  });
};
