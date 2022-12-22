import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DrawingList = ({ drawings, folder, className, ...other }) => (
  <ul
    className={cx(
      'm-0 d-grid pb-0 fluid:ph-8-12 fluid:pt-12-32 fluid:ggap-12-32 g-2 xs:g-3 sm:g-4 md:g-6',
      className
    )}
    {...other}
  >
    {drawings[folder].edges.map(drawing => (
      <a
        className="d-block td-none color-white bds-solid bdw-1 bdc-white"
        href={`/images/drawing/${folder}/${drawing.node.name}.jpg`}
        key={drawing.node.name}
      >
        <li className="p-0 lis-none">
          <img
            className="d-block w-100p h-auto bdw-0"
            src={`/images/drawing/${folder}/small/${drawing.node.name}-small.jpg`}
          />
        </li>
      </a>
    ))}
  </ul>
);

DrawingList.propTypes = {
  className: PropTypes.string,
  drawings: PropTypes.object.isRequired,
  folder: PropTypes.string.isRequired,
};

export default DrawingList;
