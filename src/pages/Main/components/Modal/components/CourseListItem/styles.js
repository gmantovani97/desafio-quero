import styled, { css } from 'styled-components';

import colors from '../../../../../../styles/colors';
import media from '../../../../../../styles/media';

export const Container = styled.div`
  border-top: 0.0625em solid ${colors.regular};
  border-bottom: 0.0625em solid ${colors.regular};
  flex-direction: row;
  padding: 1.5em 0;
`;

export const CheckBox = styled.div`
  ${props =>
    props.selected
      ? css`
          background: ${colors.primaryBlue};
        `
      : css`
          border: 0.0625em solid ${colors.bold};
        `};
  width: 0.875em;
  height: 0.875em;
  border-radius: 0.125em;
  margin-right: 0.3125em;
  justify-content: center;
  align-items: center;

  svg {
    width: 0.75em;
  }
`;

export const LogoSection = styled.div`
  margin-right: 1.25em;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80%;
  height: auto;
`;

export const CourseSection = styled.div`
  flex-direction: column;
`;

export const PriceSection = styled.div`
  flex-direction: column;

  div {
    flex-direction: row;
  }
`;

export const InfosSection = styled.div`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  ${media.mobile`
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  `}
`;

export const LogoBox = styled.div`
  flex: 1;
  width: 8em;
  justify-content: center;
  align-items: center;
`;
