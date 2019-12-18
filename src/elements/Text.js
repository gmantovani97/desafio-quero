import styled from 'styled-components';
import colors from '../styles/colors';

export default styled.p.attrs(
  ({ fontSize, textAlign, padding, color, bold, textTransform }) => ({
    fontSize: fontSize || 1.4,
    textAlign: textAlign || 'left',
    padding: padding || '0',
    color: color || colors.black,
    bold: bold || false,
    textTransform: textTransform || 'none',
  })
)`
  pointer-events: none;
  font-size: ${props => props.fontSize}em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  font-weight: ${props => (props.bold ? 700 : 400)};
  padding: ${props => props.padding};
  text-transform: ${props => props.textTransform};
`;
