import { FC } from "react";

import Typography from "../Typography";

type GlassCardProps = {
  label: string;
};

const GlassCard: FC<GlassCardProps> = ({ label }) => {
  return (
    <div className="absolute top-3 left-3 rounded-md px-4 py-2 bg-white/20 backdrop-blur-md">
      <Typography className="tracking-wide">{label}</Typography>
    </div>
  );
};

export default GlassCard;
