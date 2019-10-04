import { css } from '@emotion/core';
import * as colors from 'constants/colors';

export default {
  root: css`
    body.light-mode & {
      color: ${colors.LINK_WATER};
    }
  `,
};
