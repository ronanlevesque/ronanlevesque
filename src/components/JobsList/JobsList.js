import React from 'react';
import PropTypes from 'prop-types';

import styles from './JobsList.css';
import ListItem from 'components/ListItem';

const JobsList = ({ data }) => (
  <ul className="m-0 p-0 lis-none">
    {data.map(item => (
      <ListItem key={item.node.company}>
        <span className="d-flex jc-between ai-center pv-12 md:pv-14 lg:pv-16">
          <span className="fx-9 pr-8 fsz-14 xs:d-flex xs:ai-center lg:fsz-16">
            <span css={styles.job} className="d-block color-zircon">
              {item.node.company}
            </span>
            <span className="d-block mt-4 fst-italic color-manatee xs:mt-0 xs:ml-8 sm:ml-0">
              {item.node.job}
            </span>
          </span>
          <span className="fx-3 ta-right ff-mono fsz-12 color-manatee lg:fsz-14">
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
