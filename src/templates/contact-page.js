import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
//import isBefore from "date-fns/is_before";
import ReactMarkdown from "react-markdown";

import Form from "../components/FormSimpleAjax";
import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/past-meetups-page.scss";

export const ContactPageTemplate = props => {
  const { page } = props;

  return (
    <article className="about">
      <div className="about-container  container">
        <section className="about-header">
          <div className="about-titleWrapper">
            <h1 className="about-title">{page.frontmatter.title}</h1>
          </div>
          <div className="about-imageWrapper">
            <img src={page.frontmatter.mainImage.image} alt={page.frontmatter.mainImage.imageAlt} />
          </div>
        </section>
        <section className="section">
          <Form />
        </section>
      </div>
    </article>
  );
};


export const ContactPageTemplate = ({
  title,
  content,
  bodyIsMarkdown = false,
}) => {
  return (
    <article className="pastMeetups">
      <div className="container  pastMeetups-container">
        <h1 className="pastMeetups-title">{title}</h1>
        {bodyIsMarkdown ? (
          <ReactMarkdown className="pastMeetups-description" source={content} />
        ) : (
            <HTMLContent className="pastMeetups-description" content={content} />
          )}
        {meetups &&
          meetups.map((meetup, index) => (
            <MeetupTemplate
              key={index}
              className="pastMeetups-meetup"
              meetup={meetup.node.frontmatter}
            />
          ))}
      </div>
    </article>
  );
};

const ContactPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <ContactPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainImage {
          image
          imageAlt
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;

