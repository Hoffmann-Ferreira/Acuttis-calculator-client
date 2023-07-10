import styled from 'styled-components';

export const ContainerHistory = styled.div`
  width: 48rem;
  text-align: center;
`;

export const HoursContainer = styled.div`
  width: 48rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  text-align: left;
`;

export const InfoContainer = styled.div`
  width: 18rem;
  font-size: 0.9em;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  background-color: #e8e8e8;
  border-radius: 5px;
  padding: 1rem;
  transition: 0.4s ease-in-out;

  ul {
    list-style-type: none;
  }

  &:hover {
    box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
  }
`;
