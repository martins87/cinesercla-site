import { FC } from "react";
import CenteredElement from "../ui/CenteredElement";

type GoogleMapProps = {
  mapURL: string;
};

const GoogleMap: FC<GoogleMapProps> = ({ mapURL }) => {
  return (
    <CenteredElement
      className="hidden sm:flex w-full sm:w-1/2 rounded-lg overflow-hidden"
      justify="end"
    >
      <iframe
        src={mapURL}
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </CenteredElement>
  );
};

export default GoogleMap;
