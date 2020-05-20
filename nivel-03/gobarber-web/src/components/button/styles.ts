import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: none;
  border: 2px solid #ff9000;
  padding: 16px;
  width: 100%;
  color: #312e38;
  font-weight: 500;
  margin-top: 15px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
    border-color: ${shade(0.2, '#ff9000')};
  }
`;
