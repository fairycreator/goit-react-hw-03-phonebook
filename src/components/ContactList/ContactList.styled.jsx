import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 24px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #fff4e5;
  list-style: none;
`;

export const Item = styled.li`
  background-color: rgba(248, 244, 229, 0.9);
  border: 3px solid #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

const moveButton = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const hoverButton = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const DeleteButton = styled.button`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 0;
  line-height: 28pt;
  padding: 0 20px;
  background: #ffa580;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);

  &:hover {
    animation: ${hoverButton} 0.5s ease-in-out;
    background: #fae820;
    box-shadow: 3px 3px 1px 1px #1e3efc, 3px 3px 1px 2px rgba(0, 0, 0, 1);
  }
  &:focus {
    animation: ${hoverButton} 0.5s ease-in-out;
    background: #fae820;
    box-shadow: 3px 3px 1px 1px #1e3efc, 3px 3px 1px 2px rgba(0, 0, 0, 1);
  }

  &:active {
    animation: ${moveButton} 0.5s ease-in-out;
    background: #fa553c;
    box-shadow: 3px 3px 1px 1px #1e3efc, 3px 3px 1px 2px rgba(0, 0, 0, 1);
  }
`;
