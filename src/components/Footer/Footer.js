import React from 'react';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';

import Svg from 'components/Svg';

const Footer = () => {
  const darkMode = { value: true };

  return (
    <footer className="pt-48 pb-24 md:pt-80 md:pb-32 lg:pt-120 lg:pb-48">
      <Svg
        className={cx(
          ' d-block m-auto h-auto w-20 md:w-24 lg:w-28',
          darkMode.value ? 'color-blueBayoux' : 'color-linkWater'
        )}
        name="logo-ronan-levesque"
      />
    </footer>
  );
};

export default Footer;
