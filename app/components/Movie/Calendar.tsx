import { getNext7Days, getTodayDateFormatted } from "@/lib/utils";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import CarouselArrow from "@/app/components/CarouselArrow";
import Ticket from "./Ticket";

const Calendar = () => {
  const days = getNext7Days();

  return (
    <CenteredElement className="w-fit gap-y-3" direction="col" items="start">
      <CenteredElement className="">
        <Typography className="w-4/5 text-xl">Selecione uma data</Typography>
        <CenteredElement className="gap-x-2" justify="end">
          <CarouselArrow direction="left" onClick={() => {}} />
          <CarouselArrow direction="right" onClick={() => {}} />
        </CenteredElement>
      </CenteredElement>
      <CenteredElement className="gap-x-1" justify="start">
        {days.map(({ weekDay, monthDay, today }) => (
          <Ticket
            key={`${weekDay}-${monthDay}`}
            weekDay={weekDay}
            monthDay={monthDay}
            today={today}
          />
        ))}
      </CenteredElement>
      <Typography className="text-xl mt-4">
        {getTodayDateFormatted()}
      </Typography>
    </CenteredElement>
  );
};

export default Calendar;
