import styled from 'styled-components';

export const FormAcess = styled.form`
  width: 25rem;
  height: 29rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 2.5em;
  border-radius: 25px;
  transition: 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;

  img {
    width: 10rem;
    margin-bottom: 1rem;
  }

  label {
    width: 15rem;
  }

  input {
    width: 15rem;
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
    width: 15rem;
    color: #c31324;
  }

  div {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  button {
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

  &:hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    border: 1px solid #171717;
    box-shadow: 10px 10px 0px #666666;
  }
`;
