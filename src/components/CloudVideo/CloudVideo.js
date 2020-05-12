import React from 'react';
import PropTypes from 'prop-types';

import { CLOUDINARY_URL } from 'constants/cloudinary';

const CloudVideo = ({ file, ...other }) => (
  <video
    className="d-block w-100p"
    controls
    muted
    poster={`${CLOUDINARY_URL}/${file}.jpg`}
    src={`${CLOUDINARY_URL}/${file}.mp4`}
    type="video/mp4"
    {...other}
  />
);

CloudVideo.propTypes = {
  file: PropTypes.string.isRequired,
};
export default CloudVideo;
