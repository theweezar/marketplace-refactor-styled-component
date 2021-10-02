import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  flex-direction: ${props => props.direction || ''};;
`;

export const Item = styled.li`
  display: list-item;
`;