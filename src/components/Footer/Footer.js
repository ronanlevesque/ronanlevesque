import React from 'react';

import styles from './Footer.css';
import Svg from 'components/Svg';

const Footer = () => (
  <footer className="pt-48 pb-24 md:pt-80 md:pb-32 lg:pt-120 lg:pb-48">
    <Svg
      css={styles.root}
      className=" d-block m-auto h-auto w-20 md:w-24 lg:w-28 color-blueBayoux"
      name="logo-ronan-levesque"
    />
  </footer>
);

export default Footer;
