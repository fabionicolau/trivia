import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const BoxContainer = styled.div`
  width: 400px;
  height: 550px;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px black;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.background};
  img{
    margin-top: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const LoginForm = styled.form`
  width: 400px;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
  label{
      margin-top: 10px;
  }
`;

export const LoginButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.background};
  color: white;
  padding: 10px;
  margin-top: 10px;
  width: 300px;
  border-radius: 5px;


  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled{
    background-color: ${(props) => props.theme.colors.pink};
    color: ${(props) => props.theme.background};
    font-weight: bold;
  }
`;
