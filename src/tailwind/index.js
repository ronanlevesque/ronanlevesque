import { pxToRem } from '../helpers';

const colors = {};

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
  padding: {
    ...spacing,
  },
};
