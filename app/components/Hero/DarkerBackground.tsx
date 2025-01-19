import { FC } from "react";

type DarkerBackgroundProps = {
  children: React.ReactNode;
};

const DarkerBackground: FC<DarkerBackgroundProps> = ({ children }) => {
  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
      {children}
    </>
  );
};

export default DarkerBackground;
