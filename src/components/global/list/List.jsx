import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  width: 100%;
  flex-direction: ${props => props.direction || ''};;
`;

export const Item = styled.li`
  display: list-item;
  width: 100%;
`;

export const ListTemplate = ({...props}) => {
  const Template = props.template || List;
  return (
    <Template {...props}></Template>
  );
}

export const ItemTemplate = ({...props}) => {
  const Template = props.template || Item;
  return (
    <Template {...props}></Template>
  );
}