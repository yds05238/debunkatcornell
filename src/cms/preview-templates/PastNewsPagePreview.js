import React from "react";
import PropTypes from "prop-types";
import { PastNewsPageTemplate } from "../../templates/past-news-page";

const PastNewsPagePreview = ({ entry, widgetFor }) => {
  return (
    <PastNewsPageTemplate
      title={entry.getIn(["data", "title"])}
      content={entry.getIn(["data", "body"])}
      bodyIsMarkdown={true}
    />
  );
};

PastNewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PastNewsPagePreview;
