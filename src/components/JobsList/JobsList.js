import React from 'react';
import PropTypes from 'prop-types';

import styles from './JobsList.css';
import ListItem from 'components/ListItem';

const JobsList = ({ data }) => (
  <ul className="m-0 p-0 lis-none">
    {data.map(item => (
      <ListItem key={item.node.company}>
        <span className="d-flex jc-between ai-center pv-12 ph-8 md:pv-14 md:ph-10 lg:pv-16 lg:ph-12">
          <span className="fxg-1 pr-12 fsz-14 sm:d-flex sm:ai-center md:fsz-16 lg:fsz-18">
            <span css={styles.job} className="d-block color-zircon">
              {item.node.company}
            </span>
            <span className="d-block mt-4 fst-italic color-manatee sm:mt-0">
              {item.node.job}
            </span>
          </span>
          <span className="fxs-0 ta-right ff-mono fsz-12 color-manatee md:fsz-14 lg:fsz-16">
            {item.node.start} – {item.node.end}
          </span>
        </span>
      </ListItem>
    ))}
  </ul>
);

JobsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default JobsList;
