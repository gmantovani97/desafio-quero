import styled from 'styled-components';

import colors from '../../styles/colors';
import media from '../../styles/media';

export const Container = styled.div`
  flex: 1;
  padding: 0 5em;
  ${media.mobile`
    padding: 0 0.625em;
  `}
  flex-direction: column;
`;

export const MainTop = styled.div`
  display: flex;
  padding: 1.25em 0;
  flex-direction: row;
  align-items: center;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  ${media.mobile`
    display: none;
  `}
  flex-direction: row;
  align-items: center;
`;

export const PageSection = styled.div`
  display: none;
  ${media.mobile`
    display: flex;
  `}
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.p`
  font-size: 0.75em;
  color: ${colors.bolder};
  font-weight: bold;
  margin: 0 0.3125em;

  ${media.mobile`
    display: none;
  `}
`;

export const MainBottom = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const TitleSection = styled.div`
  flex-direction: column;
`;

export const ButtonsSection = styled.div`
  flex-direction: row;
  align-self: flex-end;
  ${media.mobile`
    align-self: normal;
    flex-direction: column;
  `}
  margin: 1.25em 0;
`;

export const Button = styled.button`
  border: 0.0625em solid ${colors.secondaryBlue};
  padding: 0.3125em 1.25em;
  font-weight: 700;
  background: ${props =>
    props.selected ? colors.secondaryBlue : colors.white};
  color: ${props => (props.selected ? colors.white : colors.secondaryBlue)};
  ${media.mobile`
    font-size: 1.25em;
    padding: 0.75em;
  `}
  &:first-of-type {
    ${media.mobile`
      border-radius: 0.25em 0.25em 0 0;
    `}
    border-radius: 0.25em 0 0 0.25em;
  }
  &:last-of-type {
    ${media.mobile`
      border-radius: 0 0 0.25em 0.25em;
    `}
    border-radius: 0 0.25em 0.25em 0;
  }
`;