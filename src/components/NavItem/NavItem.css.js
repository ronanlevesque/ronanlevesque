import { css } from '@emotion/core';

import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';
import { fluidCSS } from 'helpers';

const generateFluidCSS = (selector, properties, [minValue, maxValue]) =>
  fluidCSS(
    '',
    selector,
    properties,
    [minValue, maxValue],
    [breakpoints.XS.replace('px', ''), breakpoints.LG.replace('px', '')]
  );

export default {
  cta: css`
    &:hover:before,
    &:focus:before {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }
    ${generateFluidCSS('&:before', ['font-size'], [14, 18])}
    &:before {
      display: none;
      color: ${colors.MANATEE};
      @media (min-width: ${breakpoints.MD}) {
        content: attr(data-before);
        display: block;
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateX(0.3em) translateY(-50%);
        font-style: italic;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        white-space: nowrap;
      }
    }
  `,
};
