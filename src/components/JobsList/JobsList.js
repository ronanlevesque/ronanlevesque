import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

const JobsList = ({ data }) => (
  <ul className="m-0 p-0 lis-none">
    {data.map(item => (
      <ListItem key={item.node.company}>
        <span className="d-flex jc-between ai-center fluid:pt-12-16 fluid:pb-12-16 fluid:pl-8-12 fluid:pr-8-12">
          <p className="m-0 fxg-1 pr-12 fluid:fsz-14-18 sm:d-flex sm:ai-center">
            <span className="d-block color-zircon fluid:w-200-260">
              {item.node.company}
            </span>
            <span className="d-block mt-4 fst-italic color-manatee sm:mt-0">
              {item.node.job}
            </span>
          </p>
          <span className="fxs-0 ta-right ff-mono color-manatee fluid:fsz-12-16">
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
