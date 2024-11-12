import Venue from "./Venue";;
import React from "react";
const VenueList = ({ venues, onClick }) => {
  const performClick = (evt, id) => {
    onClick(evt, id);
  };
  return (
    <div>
      {venues? (venues.map((venue, index) => (
        <Venue key={index} venue={venue} onClick={performClick} />
      ))):("")
    }
    </div>
  );
};
export default VenueList;
