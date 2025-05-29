"use client";

import { useSchedule } from "@/app/hooks/useSchedule";
import { useLocation } from "@/app/store/location";
import Typography from "@/app/components/Typography";
import Container from "@/app/components/ui/Container";

const Programacao = () => {
  const { idCinema } = useLocation();
  console.log("idCinema", idCinema);
  const { data: scheduleList } = useSchedule(idCinema, "");
  console.log("schedule", scheduleList);

  return (
    <Container className="mt-32">
      <Typography className="text-black">Programação</Typography>
    </Container>
  );
};

export default Programacao;
