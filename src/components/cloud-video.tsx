import { CLOUDINARY_URL } from '@/constants/cloudinary';

type CloudVideoProps = {
  file: string;
};

const CloudVideo = ({ file, ...other }: CloudVideoProps) => (
  <video
    className="block w-100p"
    controls
    muted
    src={`${CLOUDINARY_URL}/${file}.mp4#t=0.1`}
    {...other}
  />
);

export default CloudVideo;
