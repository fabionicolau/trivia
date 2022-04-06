import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  `;

export const ButtonNext = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  border: none;
  width: fit-content;
  padding: 10px;
  margin: 10px auto;
  font-size: 20px;
  font-weight: 700;

  &:hover{
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
