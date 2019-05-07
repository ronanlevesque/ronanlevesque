import { css } from '@emotion/core';
import * as colors from 'constants/colors';

export default {
  gradientLine: css`
    &:after {
      background-image: linear-gradient(
        to left,
        ${colors.ZIRCON} 10%,
        ${colors.LINK_WATER},
        ${colors.ZIRCON} 90%
      );
      content: '';
      display: block;
      height: 1px;
    }
  `,
  colorTransition: css`
    transition: color 0.2s ease-out;
  `,
};
