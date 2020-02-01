import { css } from '@emotion/core';
import * as colors from 'constants/colors';

export default {
  gradientLine: css`
    &:after {
      background-image: linear-gradient(
        to left,
        ${colors.MIDNIGHT} 10%,
        ${colors.SAN_JUAN},
        ${colors.MIDNIGHT} 90%
      );
      content: '';
      display: block;
      height: 1px;
    }
    body.light-mode &:after {
      background-image: linear-gradient(
        to left,
        ${colors.ZIRCON} 10%,
        ${colors.LINK_WATER},
        ${colors.ZIRCON} 90%
      );
    }
  `,
};
