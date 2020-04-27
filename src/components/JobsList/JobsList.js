import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

const JobsList = ({ data }) => (
  <ul className="m-0 p-0 lis-none">
    {data.map(item => (
      <ListItem key={item.node.company}>
        <span className="fluid:pv-12-16 fluid:ph-8-12 xxs:d-flex xxs:jc-between xxs:ai-center">
          <p className="m-0 pr-12 fluid:fsz-14-18 xxs:fxg-1 sm:d-flex sm:ai-center">
            <span className="d-block color-zircon fluid:w-200-260">
              {item.node.company}
            </span>
            <span className="d-block mt-4 fst-italic color-manatee sm:mt-0">
              {item.node.job}
            </span>
          </p>
          <span className="d-inline-flex pb-12 ta-right ff-mono color-manatee fluid:fsz-12-16 xxs:fxs-0 xxs:pb-0">
            {item.node.start} – {item.node.end}
          </span>
        </span>
      </ListItem>
    ))}
  </ul>
);

JobsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        company: PropTypes.string.isRequired,
        end: PropTypes.number.isRequired,
        job: PropTypes.string.isRequired,
        start: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default JobsList;
