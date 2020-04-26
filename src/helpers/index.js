/* eslint-disable import/no-commonjs */

const calcPxTorem = px => `${px * 0.0625}rem`;

exports.pxToRem = calcPxTorem;

exports.fluidCSS = (
  prefix,
  selector,
  property,
  minValue,
  maxValue,
  minBreakpoint,
  maxBreakpoint
) => {
  const getPrefix = `${prefix ? `.${prefix}\\:` : ''}`;

  return `${getPrefix}${selector} {
  ${property}: ${calcPxTorem(minValue)};
}
@media screen and (min-width: ${minBreakpoint}px) {
  ${getPrefix}${selector} {
    ${property}: calc(${calcPxTorem(
    minValue
  )} + (${maxValue} - ${minValue}) * (100vw - ${minBreakpoint}px) / (${maxBreakpoint} - ${minBreakpoint}))
  }
}
@media screen and (min-width: ${maxBreakpoint}px) {
  ${getPrefix}${selector} {
    ${property}: ${calcPxTorem(maxValue)};
  }
}
`;
};
