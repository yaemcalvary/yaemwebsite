import { useMemo } from "react";
import "./Events.css";

const Events = ({
  image1,
  events,
  propPadding,
  propBackgroundImage,
  propBorderRadius,
  propBorderRadius1,
  propDisplay,
  propMinWidth,
}) => {
  const eventsLinkStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
      borderRadius: propBorderRadius,
    };
  }, [propPadding, propBackgroundImage, propBorderRadius]);

  const image1IconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const eventsStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="events-link" style={eventsLinkStyle}>
      <img
        className="image-1-icon1"
        alt=""
        src={image1}
        style={image1IconStyle}
      />
      <h2 className="events2" style={eventsStyle}>
        {events}
      </h2>
    </div>
  );
};

export default Events;
