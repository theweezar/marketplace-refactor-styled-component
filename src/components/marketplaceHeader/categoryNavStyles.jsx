import styled from "styled-components";
import { Flex } from "../global/display/Display";
import { DefaultButton, DefaultLink } from "../global/button/Button";
import { List } from "../global/list/List";
import { md, padding } from "../global/styled";
import { Absolute } from "../global/display/Position";

export const CategoryNav = styled(Flex)`
  ${padding({
    xs: '12px 8px',
    md: '0'
  })}
  background-color: ${props => props.theme.colorgray5};
  border-bottom: 1px solid ${props => props.theme.colorgray5};
`;

export const CategoryDropdownWrapper = styled.div`
  ${md(`
    display: none;
  `)}
`

export const CategoryToggleButton = styled(DefaultButton)`
  padding: 8px 12px;
  border: none;
  background-color: ${props => props.theme.colorgray3};
  border-radius: 4px;
  width: 160px;
  font-weight: 700;
`;

export const CategoryDropdown = styled(List)`
  border-radius: 4px;
  background-color: ${props => props.theme.colorgray3};
`;

export const CategoryItem = styled(DefaultLink)`
  border: none;
  font-weight: 700;
  width: 100%;
`

export const FilterButton = styled(DefaultButton)`
  padding: 8px 20px;
  border-radius: 4px;
  ${md(`
    display: none;
  `)}
`
export const CategoryNavBarWrapper = styled(Flex)`
  display: none;
  ${md(`
    display: flex;
  `)}

  a {
    padding: 16px 20px;
    position: relative;
    display: flex;
    align-items: center;

    button {
      padding: 0;
      border: none;
    }
  }
`;

export const CategoryNavBarActive = styled(Absolute)`
  height: 4px;
  background-color: ${props => props.theme.colorprimary3};
  width: 100%;
  display: ${props => props.active ? 'block' : 'none'};
`