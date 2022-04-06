import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  border: none;
  background-color: blue;
  color: white;
  padding: 10px;
  margin: 10px auto;
  width: fit-content;

  &:disabled {
    background-color: yellow;
  }

  &:hover:enabled{
    background-color: green;
  }
`;
