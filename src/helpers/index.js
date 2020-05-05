/* eslint-disable import/no-commonjs */

const pxToRem = px => `${px * 0.0625}rem`;

const fluidCSS = ({
  prefix = '',
  selector = '',
  properties = [],
  values = { min: 0, max: 0 },
  breakpoints = { min: 0, max: 0 },
}) => `${prefix}${selector} {
  ${properties.map(property => `${property}: ${pxToRem(values.min)};`).join('')}
}
@media screen and (min-width: ${breakpoints.min}px) {
  ${prefix}${selector} {
    ${properties
      .map(
        property =>
          `${property}: calc(${pxToRem(values.min)} + (${values.max} - ${
            values.min
          }) * (100vw - ${breakpoints.min}px) / (${breakpoints.max} - ${
            breakpoints.min
          }));`
      )
      .join('')}
  }
}
@media screen and (min-width: ${breakpoints.max}px) {
  ${prefix}${selector} {
    ${properties
      .map(property => `${property}: ${pxToRem(values.max)};`)
      .join('')}
  }
}
`;

exports.pxToRem = pxToRem;
exports.fluidCSS = fluidCSS;
