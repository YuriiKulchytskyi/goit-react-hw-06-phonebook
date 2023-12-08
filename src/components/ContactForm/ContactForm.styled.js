import styled from 'styled-components';

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input `
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button `
  width: 100px;
  height: 30px; 
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #e0e0e0;
  }
`;

export const Text = styled.p `
  margin-bottom: 15px;
`;
