import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = () => {
  const { site } = useStaticQuery(query);
  const title = site.siteMetadata.title;
  const description = site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[{ name: `description:`, content: description }]}
    />
  );
}

export default SEO;