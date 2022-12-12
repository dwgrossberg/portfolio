import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Daniel Grossberg",
  description,
  pageName = "Software Engineer",
  canonical = "https://www.danielgrossberg.com/",
  ogType = "website",
}: {
  title?: string;
  description?: string;
  pageName?: string;
  canonical?: string;
  ogType?: string;
}) => {
  return (
    <Helmet>
      <title key="title">{`${pageName} | ${title}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={pageName} />
      <meta key="og_url" property="og:url" content={canonical} />
      <meta key="og_site_name" property="og:site_name" content={pageName} />
      <meta name="robots" content="index,follow" />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <link rel="canonical" href={canonical} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
