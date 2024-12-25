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
  18: pxToRem(18),
  20: pxToRem(20),
  24: pxToRem(24),
  28: pxToRem(28),
  32: pxToRem(32),
  36: pxToRem(36),
  40: pxToRem(40),
  48: pxToRem(48),
  80: pxToRem(80),
  96: pxToRem(96),
  120: pxToRem(120),
  160: pxToRem(160),
};

const sizes = {
  0: 0,
  1: '1px',
  12: pxToRem(12),
  16: pxToRem(16),
  18: pxToRem(18),
  20: pxToRem(20),
  22: pxToRem(22),
  24: pxToRem(24),
  28: pxToRem(28),
  32: pxToRem(32),
  36: pxToRem(36),
  40: pxToRem(40),
  48: pxToRem(48),
  56: pxToRem(56),
  64: pxToRem(64),
  200: pxToRem(200),
  260: pxToRem(260),
  1200: pxToRem(1200),
  '90p': '90%',
  '100p': '100%',
};

module.exports = {
  corePlugins: {
    preflight: true,
  },
  colors: {
    ...colors,
  },
  fontFamily: {
    libre: ['var(--font-libre)'],
    roboto: ['var(--font-roboto)'],
    'roboto-mono': ['var(--font-roboto-mono)'],
  },
  fontSize: {
    0: 0,
    10: pxToRem(10),
    12: pxToRem(12),
    14: pxToRem(14),
    16: pxToRem(16),
    18: pxToRem(18),
    20: pxToRem(20),
    24: pxToRem(24),
    32: pxToRem(32),
    48: pxToRem(48),
  },
  height: {
    auto: 'auto',
    ...sizes,
  },
  letterSpacing: {
    widest: '0.14em',
  },
  lineHeight: {
    small: 1,
    big: 1.2,
    bigger: 1.78,
  },
  margin: {
    auto: 'auto',
    ...spacing,
  },
  maxWidth: {
    600: pxToRem(600),
    700: pxToRem(700),
    800: pxToRem(800),
    824: pxToRem(824),
    1000: pxToRem(1000),
    1200: pxToRem(1200),
  },
  padding: {
    ...spacing,
  },
  screens: {
    ...breakpoints,
  },
  width: {
    ...sizes,
  },
};
