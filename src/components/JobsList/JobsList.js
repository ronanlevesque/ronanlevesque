import React from 'react';
import PropTypes from 'prop-types';
import helperStyles from 'css/helpers.css';
import styles from './JobsList.css';

const JobsList = ({ data }) => (
  <ul className="m-0 p-0 lis-none">
    {data.map(item => (
      <li css={helperStyles.gradientLine} key={item.node.company}>
        <span className="d-flex jc-between ai-center pv-8 fsz-12 md:pv-12 md:fsz-14 lg:pv-16 lg:fsz-16">
          <span>
            <span
              css={styles.job}
              className="d-block fw-bold color-sanJuan sm:d-inline-flex"
            >
              {item.node.company}
            </span>
            <span className="d-block mt-4 color-blueBayoux sm:d-inline-flex fst-italic">
              {item.node.job}
            </span>
          </span>
          <span>
            <span className="ff-mono">
              &rsquo;{item.node.start}
              <span className="color-manatee"> &mdash; </span>
              &rsquo;{item.node.end}
            </span>
          </span>
        </span>
      </li>
    ))}
  </ul>
);

JobsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default JobsList;
