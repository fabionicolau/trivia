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
  height: 600px;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.background};
  img{
    margin-top: 30px;
  }
  h2 {
    margin: 15px auto;
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

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 500;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.pink};
  }
`;
