import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobsList.css';
import ListItem from 'components/ListItem';

const JobsList = ({ data }) => (
  <ul className="m-0 p-0 lis-none">
    {data.map(item => (
      <ListItem key={item.node.company}>
        <span className="d-flex jc-between ai-center pv-12 fsz-14 md:pv-14 lg:pv-16 lg:fsz-16">
          <span className="sm:d-flex sm:ai-center">
            <span css={styles.job} className="d-block fw-bold color-sanJuan">
              {item.node.company}
            </span>
            <span className="d-block mt-4 color-blueBayoux fst-italic sm:mt-0">
              {item.node.job}
            </span>
          </span>
          <span>
            <span className="ff-mono">
              ’{item.node.start}
              <span className="color-manatee">—</span>’{item.node.end}
            </span>
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
