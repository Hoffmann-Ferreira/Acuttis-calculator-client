import styled from 'styled-components';

export const HeaderCalc = styled.header`
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;

  .logoContainer {
    width: 50rem;
    display: flex;
    justify-content: center;
    margin: 1rem;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 5px;
  }
`;

export const MainCalc = styled.main`
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 2.5em;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  margin-bottom: 2rem;

  .buttonLogout {
    width: 5rem;
    align-self: center;
    padding: 0.7em;
    padding-left: 1em;
    padding-right: 1em;
    margin-left: 60rem;
    border-radius: 10px;
    border: none;
    color: black;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;

    &:hover {
      box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
      transform: translateX(-0.5em) translateY(-0.5em);
      background-color: #c31324;
      color: #ffffff;
    }
  }
`;

export const FormCalc = styled.form`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 2.5em;
  border-radius: 5px 5px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;

  input {
    border-radius: 5px;
    border: 1px solid whitesmoke;
    background-color: whitesmoke;
    outline: none;
    padding: 0.7em;
    transition: 0.4s ease-in-out;

    &:hover {
      box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
    }
  }

  p {
    color: #c31324;
  }

  button {
    width: 5rem;
    align-self: center;
    padding: 0.7em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 10px;
    border: none;
    color: black;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;

    &:hover {
      box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
      transform: translateX(-0.5em) translateY(-0.5em);
      background-color: #036b76;
      color: #ffffff;
    }
  }
`;

export const ValueContainer = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 2.5em;
  border-radius: 0px 0px 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  margin-bottom: 2rem;
`;

export const HistoryContainer = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 2.5em;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  margin-bottom: 2rem;
`;
