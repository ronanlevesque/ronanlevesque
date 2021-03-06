import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { useSiteMetadata } from 'hooks';

const Head = ({ lang = 'en', metaDescription, pageTitle, url }) => {
  const { description, siteUrl, social, title } = useSiteMetadata();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{url !== '/' ? `${pageTitle} | ${title}` : title}</title>
      <meta
        content={metaDescription ? metaDescription : description}
        name="description"
      />
      <meta
        content="width=device-width, initial-scale=1, viewport-fit=cover"
        name="viewport"
      />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content={social.twitter} name="twitter:site" />
      <meta content={`${pageTitle} | ${title}`} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
      <meta content={siteUrl} name="twitter:domain" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:site_name" />
      <meta content={`${pageTitle} | ${title}`} property="og:title" />
      <meta content={metaDescription} property="og:description" />
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
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      <meta name="twitter:card" content="summary" />
      <html lang={lang} />
      <body className="m-0 ff-libre color-linkWater bgc-blackPearl fluid:ph-12-20" />
    </Helmet>
  );
};

Head.propTypes = {
  lang: PropTypes.string,
  metaDescription: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Head;
