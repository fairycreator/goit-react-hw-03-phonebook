import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #fff4e5;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #FFF;
  text-align: left;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 5px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 14pt;
  line-height: 28px;
  font-family: 'Roboto', sans-serif;
  margin-top: 8px;
  border-radius: 4px;
  background: rgba(248, 244, 229, 0.9);
  min-width: 250px;
  padding-left: 5px;
  outline: none;
  color: rgba(0, 0, 0, 1);
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

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
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