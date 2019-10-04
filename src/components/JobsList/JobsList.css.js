import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';
import { pxToRem } from 'helpers';

export default {
  job: css`
    body.light-mode & {
      color: ${colors.SAN_JUAN};
    }
    @media (min-width: ${breakpoints.SM}) {
      width: ${pxToRem(190)};
    }
    @media (min-width: ${breakpoints.MD}) {
      width: ${pxToRem(220)};
    }
    @media (min-width: ${breakpoints.LG}) {
      width: ${pxToRem(250)};
    }
  `,
  company: css`
    body.light-mode & {
      color: ${colors.BLUE_BAYOUX};
    }
  `,
  dash: css`
    body.light-mode & {
      color: ${colors.BLUE_BAYOUX};
    }
  `,
};
