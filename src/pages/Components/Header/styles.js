import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  height: 11.6rem;
  width: 100%;
  padding: 4.2rem 12rem;
  display: flex;
  justify-content: space-between;
  gap: 6.4rem;
  align-items: center; /* Alinhe verticalmente no centro */

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
  }

`;

  


export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      align-self: flex-end;
    }

    h2 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }
`;
