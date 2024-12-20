import { pxToRem } from '../helpers';

const breakpoints = {
  xxs: pxToRem(350),
  xs: pxToRem(500),
  sm: pxToRem(768),
  md: pxToRem(960),
  lg: pxToRem(1200),
  xl: pxToRem(1440),
  xxl: pxToRem(1920),
};

const colors = {
  transparent: 'transparent',
  white: '#FFF',
  zircon: '#ECEDEF',
  linkWater: '#C6CACF',
  manatee: '#8D96A0',
  blueBayoux: '#677481',
  sanJuan: '#415161',
  midnight: '#1E2935',
  blackPearl: '#1a242e',
  bunker: '#141c24',
  bunkerDarker: '#11181f',
};

const spacing = {
  0: 0,
  4: pxToRem(4),
  8: pxToRem(8),
  10: pxToRem(10),
  12: pxToRem(12),
  14: pxToRem(14),
  16: pxToRem(16),
  20: pxToRem(20),
  24: pxToRem(24),
  32: pxToRem(32),
  48: pxToRem(48),
  80: pxToRem(80),
  120: pxToRem(120),
  160: pxToRem(160),
};

module.exports = {
  corePlugins: {
    preflight: true,
  },
  colors: {
    ...colors,
  },
  padding: {
    ...spacing,
  },
  screens: {
    ...breakpoints,
  },
};
