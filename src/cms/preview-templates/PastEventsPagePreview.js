import React from "react";
import PropTypes from "prop-types";
import { PastEventsPageTemplate } from "../../templates/past-events-page";

const PastEventsPagePreview = ({ entry, widgetFor }) => {
  return (
    <PastEventsPageTemplate
      title={entry.getIn(["data", "title"])}
      content={entry.getIn(["data", "body"])}
      bodyIsMarkdown={true}
    />
  );
};

PastEventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PastEventsPagePreview;
