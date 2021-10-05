import styled from "styled-components";
import { Flex } from "../../global/display/Display";
import { Relative } from "../../global/display/Position"
import { md, lg, flex } from "../../global/styled";
import { DefaultButton, Button3E } from "../../global/button/Button";
import { Item, List } from "../../global/list/List";

export const SearchResultContainer = styled(Relative)`
  ${flex('100%')}
  ${md(`
    order: 2;
    ${flex('calc(100% - 280px)')}
  `)}
`

export const SearchResultWrapper = styled(Relative)`
  height: calc(100vh - 110px);
  background-color: ${props => props.theme.colorgray5};
  overflow-y: scroll;
  padding: 12px 8px;
`;

export const SortSectionMobileWrapper = styled(Flex)`
  ${lg(`
    display: none;
  `)}
`;

export const SortToggleButton = styled(DefaultButton)`
  padding: 8px 12px;
  width: 160px;
`;

export const DropdownMenu = styled(List)`
  
`;

export const DropdownItem = styled(SortToggleButton)`
  width: 100%;
  border: none;
  background-color: ${props => props.theme.colorgray6};
`