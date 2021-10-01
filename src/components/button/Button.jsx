import styled from 'styled-components';

export const DefaultButton = styled.button`
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  border: 1px solid $color-gray-2;
  border-radius: 0;
  background-color: transparent;

  &.active {
    background-color: $color-primary-6;
    border: 1px solid $color-primary-4;
  }
`;