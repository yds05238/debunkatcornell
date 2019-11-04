import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

import NewTemplate from "../../templates/new";

const NewPreview = ({ entry }) => {
  const news = entry.getIn(["data"]).toJS();
  const rawDate = news.date;
  const formattedDate = format(rawDate, "MMMM Do YYYY @ h:mm A");
  return <NewTemplate news={{ ...news, formattedDate, rawDate }} />;
};

NewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NewPreview;
