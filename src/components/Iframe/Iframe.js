import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Iframe.css';

const Iframe = ({ className, src, noMobile, title, ...other }) => (
  <div
    css={styles.root}
    className={cx('bgc-bunker pos-relative', className)}
    {...other}
  >
    <iframe
      className={cx(
        'pos-absolute left-0 top-0 w-100p h-100p bdw-0',
        noMobile && 'd-none sm:d-block'
      )}
      src={src}
      title={title}
    />
    {noMobile && (
      <div className="ta-center ff-roboto lh-bigger pos-absolute left-0 top-0 right-0 bot-0 d-flex fxd-column ai-center jc-center sm:d-none">
        <div className="ov-auto fluid:p-12-20">
          <h3 className="m-0 fluid:fsz-14-18">
            This iframe isn’t optimized for small screen sizes
          </h3>
          <p className="m-0 color-manatee fluid:fsz-12-16">
            Visit this page from a larger device.
          </p>
        </div>
      </div>
    )}
  </div>
);

Iframe.propTypes = {
  className: PropTypes.string,
  noMobile: PropTypes.bool,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Iframe;
