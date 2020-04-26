const fs = require('fs');
const helpers = require('./src/helpers');

const minBreakpoint = 500;
const maxBreakpoint = 1200;

const selectors = [
  {
    className: 'fsz',
    property: 'font-size',
    minMax: [
      [12, 16],
      [14, 18],
      [18, 32],
    ],
  },
  {
    className: 'ml',
    property: 'margin-left',
    minMax: [[4, 12]],
  },
  {
    className: 'mt',
    property: 'margin-top',
    minMax: [
      [4, 12],
      [48, 120],
    ],
  },
  {
    className: 'mr',
    property: 'margin-right',
    minMax: [[8, 12]],
  },
  {
    className: 'pl',
    property: 'padding-left',
    minMax: [
      [8, 12],
      [12, 20],
    ],
  },
  {
    className: 'pt',
    property: 'padding-top',
    minMax: [
      [12, 16],
      [48, 120],
      [80, 160],
    ],
  },
  {
    className: 'pr',
    property: 'padding-right',
    minMax: [
      [8, 12],
      [12, 20],
    ],
  },
  {
    className: 'pb',
    property: 'padding-bottom',
    minMax: [
      [12, 16],
      [24, 48],
      [80, 160],
    ],
  },
  {
    className: 'w',
    property: 'width',
    minMax: [
      [16, 24],
      [20, 28],
      [24, 32],
      [200, 260],
    ],
  },
  {
    className: 'h',
    property: 'height',
    minMax: [
      [32, 40],
      [48, 64],
    ],
  },
  {
    className: 'maw',
    property: 'max-width',
    minMax: [[700, 824]],
  },
];

const styles = selectors
  .map(selector =>
    selector.minMax
      .map(value =>
        helpers.fluidCSS(
          'fluid',
          `${selector.className}-${value[0]}-${value[1]}`,
          selector.property,
          value[0],
          value[1],
          minBreakpoint,
          maxBreakpoint
        )
      )
      .join('')
  )
  .join('');

fs.writeFile('src/css/fluid.css', styles, err => console.log(err));
