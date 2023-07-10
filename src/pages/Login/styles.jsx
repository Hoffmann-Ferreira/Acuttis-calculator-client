import styled from 'styled-components';

export const HeaderLogin = styled.header`
  width: 99.9vw;
  height: 20vh;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .range {
    width: 99.9vw;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    box-shadow:  3px 3px 5px #818080,
             -3px -3px 5px #7a7a7a;
  }

  h2 {
    font-family: 'Anton', sans-serif;
  }
`;

export const MainLogin = styled.main`
  width: 99.9vw;
  height: 80vh;
  display: flex;
  justify-content: center;
`;
