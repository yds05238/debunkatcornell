import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

import EventTemplate from "../../templates/event";

const EventPreview = ({ entry }) => {
  const event = entry.getIn(["data"]).toJS();
  const rawDate = event.date;
  const formattedDate = format(rawDate, "MMMM Do YYYY @ h:mm A");
  return <EventTemplate event={{ ...event, formattedDate, rawDate }} />;
};

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default EventPreview;
