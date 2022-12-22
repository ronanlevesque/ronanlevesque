import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ image, ...other }) => (
  <a href={`/images/drawing/boards/${image}.jpg`} {...other}>
    <img
      className="d-block w-100p fluid:mt-12-32 fluid:ph-8-12"
      src={`/images/drawing/boards/${image}.jpg`}
    />
  </a>
);

Board.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Board;
