import { css } from '@emotion/core';
import * as colors from 'constants/colors';

export default {
  wrapper: css`
    body.light-mode & {
      color: ${colors.SAN_JUAN};
    }
  `,
  link: css`
    body.light-mode & {
      color: ${colors.SAN_JUAN};
    }
  `,
  icon: css`
    body.light-mode & {
      color: ${colors.BLUE_BAYOUX};
    }
  `,
};
