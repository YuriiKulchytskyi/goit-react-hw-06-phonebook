import styled from 'styled-components'

export const ContactItems = styled.li `
width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactName = styled.span `
  
  margin-right: 10px;
`;

export const Button = styled.button `
  width: 100px;
  height: 30px;
  margin-left: 20px;  
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
    :hover {
    background-color: #e0e0e0;
  }
`;
