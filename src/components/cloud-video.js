import PropTypes from 'prop-types';

import { CLOUDINARY_URL } from '@/constants/cloudinary';

const CloudVideo = ({ file, ...other }) => (
  <video
    className="block w-100p"
    controls
    muted
    src={`${CLOUDINARY_URL}/${file}.mp4#t=0.1`}
    type="video/mp4"
    {...other}
  />
);

CloudVideo.propTypes = {
  file: PropTypes.string.isRequired,
};

export default CloudVideo;
