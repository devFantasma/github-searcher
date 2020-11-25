import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 900px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  background-color: #1f1f1f;
  font-weight: bold;
  position: relative;

  > svg {
    position: absolute;
    left: 10px;
  }
`;

export const CardFollowing = styled.section`
  margin: 30px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #7070705a;

  main {
    display: flex;
    align-items: center;
    position: relative;

    div {
      height: 42px;
      width: 10px;
      margin-right: 10px;
      background-color: #ffce00;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 30px;
    }

    svg {
      position: absolute;
      right: 20px;
    }
  }
`;