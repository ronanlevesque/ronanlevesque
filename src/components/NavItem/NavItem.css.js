import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';

export default {
  cta: css`
    outline: none;
    &:hover:before,
    &:focus:before {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }
    &:before {
      display: none;
      @media (min-width: ${breakpoints.MD}) {
        content: attr(data-before);
        color: ${colors.BLUE_BAYOUX};
        display: block;
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateX(0.3em) translateY(-50%);
        font-style: italic;
        font-size: 14px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        white-space: nowrap;
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: 16px;
      }
    }
    .dark-mode &:before {
      color: ${colors.MANATEE};
    }
  `,
  last: css`
    &:before {
      margin-right: 12px;
      color: ${colors.BLUE_BAYOUX};
      content: '·';
      @media (min-width: ${breakpoints.MD}) {
        margin-right: 16px;
      }
      @media (min-width: ${breakpoints.LG}) {
        margin-right: 20px;
      }
    }
    .dark-mode &:before {
      color: ${colors.MANATEE};
    }
  `,
};
