import React from "react";
import PropTypes from "prop-types";
import { TeamPageTemplate } from "../../templates/team-page";

const TeamPagePreview = ({ entry, widgetFor }) => (
  <TeamPageTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeamPagePreview;
