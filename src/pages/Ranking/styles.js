import styled from 'styled-components';

export const RankingContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  flex-direction: column;
`;

export const RankingTitle = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.text}
`;
