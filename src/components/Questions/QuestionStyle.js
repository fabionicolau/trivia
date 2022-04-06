import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const QuestionsText = styled.p`
  font-size: 25px;
`;
export const ButtonAnswers = styled.button`
  background-color: ${({ theme, className }) => {
    if (className === 'incorrect-answer') {
      return theme.colors.red;
    }
    if (className === 'correct-answer') {
      return theme.colors.green;
    }
    return theme.comment;
  }};
  color: ${({ theme, className }) => {
    if (className === 'correct-answer') {
      return theme.colors.secondary;
    }
    return theme.text;
  }};
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: none;
  width: 600px;
  padding: 20px;
  margin-top: 20px;

  &:hover {
    transform: translate(-10px, -10px);
    background-color: ${({ theme }) => theme.colors.pink}
  }
`;
