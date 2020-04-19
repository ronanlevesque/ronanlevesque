import { css } from '@emotion/core';
import * as breakpoints from 'constants/breakpoints';
import * as colors from 'constants/colors';

export default {
  cta: css`
    &:hover:before,
    &:focus:before {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }
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
        font-size: 14px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        white-space: nowrap;
      }
      @media (min-width: ${breakpoints.MD}) {
        font-size: 16px;
      }
      @media (min-width: ${breakpoints.LG}) {
        font-size: 18px;
      }
    }
  `,
  last: css`
    &:before {
      margin-right: 12px;
      color: ${colors.MANATEE};

      content: '·';
      @media (min-width: ${breakpoints.MD}) {
        margin-right: 16px;
      }
      @media (min-width: ${breakpoints.LG}) {
        margin-right: 20px;
      }
    }
  `,
};
