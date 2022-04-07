import styled from 'styled-components';

export const CountDownContainer = styled.div`
  text-align: center;
  font-size: 50px;
  margin-top: 2px;
`;

export const TimerParagraph = styled.p`
   color: ${({ theme, counter }) => {
    const timerWarning = 7;
    const timerWarning2 = 15;
    if (counter <= timerWarning) {
      return theme.colors.red;
    }
    if (counter <= timerWarning2) {
      return theme.colors.orange;
    }
    return theme.colors.text;
  }};
 `;
