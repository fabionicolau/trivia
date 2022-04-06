import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AvatarImageContainer = styled.img`
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  border-radius: 50px;
`;

export const AvatarInfosContainer = styled.div`
  display: flex;
  margin-right: 30px;
  flex-direction: column;
  justify-content: center;
`;
