import { css } from '@emotion/core';
import * as colors from 'constants/colors';

export default {
  SmallText: css`
    &:hover svg,
    &:focus svg {
      color: ${colors.LINK_WATER};
    }
  `,
};
