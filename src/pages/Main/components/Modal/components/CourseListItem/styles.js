import styled, { css } from 'styled-components';

import colors from '../../../../../../styles/colors';
import media from '../../../../../../styles/media';

export const Container = styled.div`
  border-top: 0.0625em solid ${colors.bold};
  border-bottom: 0.0625em solid ${colors.bold};
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
  align-items: center;
  margin-right: 1.25em;
`;

export const Logo = styled.img`
  height: 2em;
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
  flex-direction: column;
`;
