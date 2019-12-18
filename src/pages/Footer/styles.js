import styled from 'styled-components';

import colors from '../../styles/colors';
import media from '../../styles/media';

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  flex: 1;
  background: ${colors.secondaryBlue};
  flex-wrap: wrap;
  padding: 1.25em 5em;
  ${media.mobile`
    padding: 0;
  `}
`;

export const BoxInfo = styled.div`
  &:first-of-type {
    ${media.mobile`
      flex-direction: row;
      flex: initial;
      width: 100%;
      border-bottom: 0.25em solid ${colors.primaryBlue};
    `}
    svg {
      margin-right: 0.625em;
    }
    div {
      p {
        &:last-child {
          display: flex;
        }
      }
    }
  }

  &:nth-of-type(2) {
    ${media.mobile`
      div {
        p {
          &:first-child {
            display: none;
          }
        }
        &::after {
          margin-top: 0.3125em;
          font-weight: bold;
          color: ${colors.white};
          content: 'Chat';
        }
      }
    `}
  }

  &:nth-of-type(3) {
    ${media.mobile`
      border-right: 0.25em solid ${colors.primaryBlue};
      border-left: 0.25em solid ${colors.primaryBlue};
      div {
        p {
          &:first-child {
            display: none;
          }
        }
        &::after {
          margin-top: 0.3125em;
          font-weight: bold;
          color: ${colors.white};
          content: 'E-mail';
        }
      }
    `}
  }

  &:nth-of-type(4) {
    ${media.mobile`
      div {
        p {
          &:first-child {
            display: none;
          }
        }
        &::after {
          margin-top: 0.3125em;
          font-weight: bold;
          color: ${colors.white};
          content: 'Ajuda';
        }
      }
    `}
  }

  flex: 1;
  justify-content: center;
  align-items: center;
  ${media.mobile`
    flex-direction: column;
    padding: 0.625em;
  `}

  svg {
    margin-right: 0.625em;
    ${media.mobile`
      margin-right: 0;
    `}
    width: 2.5em;
  }
`;

export const BoxInfoSection = styled.div`
  flex-direction: column;
  align-items: flex-start;

  p:nth-child(2) {
    ${media.mobile`
        display: none;
    `}
  }
`;
