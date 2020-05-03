/* eslint-disable import/no-commonjs, max-params */

const calcPxTorem = px => `${px * 0.0625}rem`;

exports.pxToRem = calcPxTorem;

exports.fluidCSS = (
  prefix,
  selector,
  properties,
  [minValue, maxValue],
  [minBreakpoint, maxBreakpoint]
) => {
  const getPrefix = `${prefix ? `.${prefix}` : ''}`;

  return `${getPrefix}${selector} {
  ${properties
    .map(property => `${property}: ${calcPxTorem(minValue)};`)
    .join('')}
}
@media screen and (min-width: ${minBreakpoint}px) {
  ${getPrefix}${selector} {
    ${properties
      .map(
        property =>
          `${property}: calc(${calcPxTorem(
            minValue
          )} + (${maxValue} - ${minValue}) * (100vw - ${minBreakpoint}px) / (${maxBreakpoint} - ${minBreakpoint}));`
      )
      .join('')}
  }
}
@media screen and (min-width: ${maxBreakpoint}px) {
  ${getPrefix}${selector} {
    ${properties
      .map(property => `${property}: ${calcPxTorem(maxValue)};`)
      .join('')}
  }
}
`;
};
