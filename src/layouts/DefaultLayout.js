import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from 'components/GlobalStyles';
import Head from 'components/Head';

const DefaultLayout = ({ children, lang, metaDescription, title, url }) => (
  <>
    <Head
      lang={lang}
      metaDescription={metaDescription}
      pageTitle={title}
      url={url}
    />
    <GlobalStyles />
    {children}
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
  metaDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DefaultLayout;
