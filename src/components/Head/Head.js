import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useSiteMetadata } from 'hooks';

const Head = ({ metaDescription, pageTitle, url }) => {
  const { description, siteUrl, social, title } = useSiteMetadata();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${pageTitle} | ${title}`}</title>
      <meta
        content={metaDescription ? metaDescription : description}
        name="description"
      />
      <meta
        content="width=device-width, initial-scale=1, viewport-fit=cover"
        name="viewport"
      />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={social.twitter} name="twitter:site" />
      <meta content={`${pageTitle} | ${title}`} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
      <meta content={siteUrl} name="twitter:domain" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:site_name" />
      <meta content={`${pageTitle} | ${title}`} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content="1200" property="og:image:width" />
      <meta content="500" property="og:image:height" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#b91d47" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

Head.propTypes = {
  metaDescription: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Head;
