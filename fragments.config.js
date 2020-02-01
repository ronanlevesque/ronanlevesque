/* eslint-disable import/no-commonjs */
const helpers = require('./src/helpers');

const pxToRem = helpers.pxToRem;

const config = {
  // General settings for the compiled code
  options: {
    namespace: '',
    important: false,
    separator: '\\:',
  },
  // Define your breakpoints
  breakpoints: {
    xs: '500px',
    sm: '768px',
    md: '960px',
    lg: '1200px',
    xl: '1440px',
    xxl: '1920px',
  },
  // Define your brand colors and any others you might want to reuse across your project
  colors: {
    transparent: 'transparent',
    white: '#FFF',
    zircon: '#ECEDEF',
    linkWater: '#C6CACF',
    manatee: '#8D96A0',
    blueBayoux: '#677481',
    sanJuan: '#415161',
    midnight: '#1E2935',
    blackPearl: '#0D1217',
  },
  // Spacing is used mainly for paddings and margins
  spacing: {
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
  },
  // Sizes are for widths and heights mostly
  sizes: {
    0: 0,
    12: pxToRem(12),
    16: pxToRem(16),
    20: pxToRem(20),
    24: pxToRem(24),
    28: pxToRem(28),
    32: pxToRem(32),
    40: pxToRem(40),
    48: pxToRem(48),
    64: pxToRem(64),
    '80p': '80%',
    '100p': '100%',
  },
};
// eslint-disable-next-line import/no-commonjs
module.exports = {
  config,
  modules: {
    // ROOT
    root: {
      cssVariables: {
        classes: config.colors,
      },
    },
    // BACKGROUNDS
    backgrounds: {
      background: {
        responsive: true,
      },
      backgroundAttachment: {
        responsive: true,
      },
      backgroundColor: {
        responsive: true,
        hover: true,
        classes: config.colors,
      },
      backgroundImage: {
        responsive: true,
      },
      backgroundPosition: {
        responsive: true,
      },
      backgroundRepeat: {
        responsive: true,
      },
      backgroundSize: {
        responsive: true,
      },
    },
    // BORDERS
    borders: {
      border: {
        responsive: true,
      },
      borderColor: {
        responsive: true,
        classes: config.colors,
      },
      borderRadius: {
        responsive: true,
        classes: {
          0: 0,
          2: '2px',
          4: '4px',
          6: '6px',
          '100p': '100%',
          max: '9999px',
        },
      },
      borderStyle: {
        responsive: true,
      },
      borderWidth: {
        responsive: true,
        classes: {
          0: 0,
          1: '1px',
          2: '2px',
          3: '3px',
        },
      },
    },
    // BOX-SIZING
    box: {
      boxSizing: {
        responsive: true,
      },
      display: {
        responsive: true,
      },
      margin: {
        responsive: true,
        classes: config.spacing,
      },
      overflow: {
        responsive: true,
      },
      padding: {
        responsive: true,
        classes: config.spacing,
      },
      visibility: {
        responsive: true,
      },
    },
    // COLORS
    colors: {
      color: {
        hover: true,
        classes: config.colors,
      },
      fill: {
        hover: true,
        classes: config.colors,
      },
      stroke: {
        hover: true,
        classes: config.colors,
      },
    },
    // +FLEXBOX
    flexbox: {
      alignContent: {
        responsive: true,
      },
      alignItems: {
        responsive: true,
      },
      alignSelf: {
        responsive: true,
      },
      flexDirection: {
        responsive: true,
      },
      flexGrow: {
        responsive: true,
        classes: {
          0: 0,
          1: 1,
        },
      },
      flexShrink: {
        responsive: true,
        classes: {
          0: 0,
          1: 1,
        },
      },
      flexWrap: {
        responsive: true,
      },
      flex: {
        responsive: true,
        classes: {
          1: '0 1 8.333333%',
          2: '0 1 16.666667%',
          3: '0 1 25%',
          4: '0 1 33.333333%',
          5: '0 1 41.666667%',
          6: '0 1 50%',
          7: '0 1 58.333333%',
          8: '0 1 66.666667%',
          9: '0 1 75%',
          10: '0 1 83.333333%',
          11: '0 1 91.666667%',
          12: '0 1 100%',
        },
      },
      justifyContent: {
        responsive: true,
      },
    },
    // GRIDS
    grids: {
      gridColumn: {
        responsive: true,
        classes: {
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
        },
      },
      gridRow: {
        responsive: true,
        classes: {
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
        },
      },
      grid: {
        responsive: true,
        classes: {
          2: 'repeat(2, 6fr)',
          3: 'repeat(3, 4fr)',
          4: 'repeat(4, 3fr)',
          6: 'repeat(6, 2fr)',
          12: 'repeat(12, 1fr)',
          '1-11': '1fr 11fr',
          '1-5': '2fr 10fr',
          '1-3': '3fr 9fr',
          '1-2': '4fr 8fr',
          '2-1': '8fr 4fr',
          '3-1': '9fr 3fr',
          '5-7': '5fr 7fr',
          '5-1': '10fr 2fr',
          '7-5': '7fr 5fr',
          '11-1': '11fr 1fr',
        },
      },
      gridGap: {
        responsive: true,
        classes: config.spacing,
      },
    },
    // IMAGES
    images: {
      objectFit: {
        responsive: true,
      },
      objectPosition: {
        responsive: true,
      },
    },
    // LAYOUT
    layout: {
      bottom: {
        responsive: true,
        classes: config.spacing,
      },
      clear: {
        responsive: true,
      },
      float: {
        responsive: true,
      },
      left: {
        responsive: true,
        classes: config.spacing,
      },
      position: {
        responsive: true,
      },
      right: {
        responsive: true,
        classes: config.spacing,
      },
      top: {
        responsive: true,
        classes: config.spacing,
      },
      verticalAlign: {
        responsive: true,
      },
      zIndex: {
        responsive: true,
        classes: {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
        },
      },
    },
    // MISC
    misc: {
      appearance: {
        responsive: true,
      },
      boxShadow: {
        responsive: true,
        hover: true,
        classes: {
          default:
            '0 5px 15px 0 rgba(37, 44, 97, 0.15), 0 2px 4px 0 rgba(93, 100, 148, 0.2)',
        },
      },
      cursor: {
        responsive: true,
      },
      opacity: {
        responsive: true,
        hover: true,
        classes: {
          0: 0,
          '25p': 0.25,
          '50p': 0.5,
          '75p': 0.75,
          '100p': 1,
        },
      },
      pointerEvents: {
        responsive: true,
      },
      transition: {
        responsive: true,
        classes: {
          0: '0s',
          2: '2s',
          4: '4s',
        },
      },
      userSelect: {
        responsive: true,
      },
    },
    // SIZES
    sizes: {
      height: {
        responsive: true,
        classes: config.sizes,
      },
      maxHeight: {
        responsive: true,
        classes: {
          0: 0,
          '100p': '100%',
          '100vh': '100vh',
        },
      },
      maxWidth: {
        responsive: true,
        classes: {
          600: pxToRem(600),
          800: pxToRem(800),
          1200: pxToRem(1200),
        },
      },
      minHeight: {
        responsive: true,
        classes: {
          0: 0,
          '100p': '100%',
          '100vh': '100vh',
        },
      },
      minWidth: {
        responsive: true,
        classes: {
          0: 0,
          '100p': '100%',
        },
      },
      width: {
        responsive: true,
        classes: config.sizes,
      },
    },
    // TYPOGRAPHY
    typography: {
      fontFamily: {
        responsive: true,
        classes: {
          libre: 'Libre Baskerville, serif',
          roboto: 'Roboto, sans-serif',
          mono:
            '"Roboto Mono", "SFMono-Regular", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
        },
      },
      fontSize: {
        responsive: true,
        classes: {
          0: 0,
          10: pxToRem(10),
          12: pxToRem(12),
          14: pxToRem(14),
          16: pxToRem(16),
          18: pxToRem(18),
          20: pxToRem(20),
          24: pxToRem(24),
          32: pxToRem(32),
        },
      },
      fontStyle: {
        responsive: true,
      },
      fontWeight: {
        responsive: true,
      },
      letterSpacing: {
        responsive: true,
        classes: {
          big: '0.14em',
        },
      },
      lineClamp: {
        responsive: true,
        classes: {
          1: 1,
          2: 2,
          3: 3,
        },
      },
      lineHeight: {
        responsive: true,
        classes: {
          small: 1,
          big: 1.33,
          bigger: 1.78,
        },
      },
      listStyle: {
        responsive: true,
      },
      textAlign: {
        responsive: true,
      },
      textDecoration: {
        responsive: true,
        hover: true,
      },
      textOverflow: {
        responsive: true,
      },
      textTransform: {
        responsive: true,
      },
      whiteSpace: {
        responsive: true,
      },
      wordBreak: {
        responsive: true,
      },
    },
  },
};
