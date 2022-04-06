import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  justify-self: flex-end;
  padding-bottom: 30%;
  flex-grow: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  color: ${({ theme }) => theme.secondary};

  &:hover {
  background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
