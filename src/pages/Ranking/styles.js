import styled from 'styled-components';

export const RankingContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 40px;
  overflow: hidden
`;

export const RankingTopSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RankingTitle = styled.h1`
  font-weight: 500;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.text}
`;

export const RankingUsersInfos = styled.ul`
  list-style: none;
  overflow-y: scroll;
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent; 
  }
`;

export const RankingUser = styled.li`
  background-color: ${({ theme }) => theme.secondary};
  padding: 10px;
  display: flex;
  gap: 30px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 10px;
  box-shadow: 0px 10px 5px -3px rgba(0,0,0,0.6);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.colors.pink};
  }
`;

export const RankingUsersDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const RankingUserImage = styled.img`
  border-radius: 100%;
  width: 100px;
  border: 3px solid ${({ theme }) => theme.background};
`;

export const RankingNameSide = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
`;

export const RankingUserName = styled.span`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.cyan};
`;

export const RankingScoreSide = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple}
`;

export const RankingScore = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const RankingButton = styled.button`
  width: fit-content;
  margin: auto;
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
