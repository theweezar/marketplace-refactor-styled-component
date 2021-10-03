import styled from "styled-components";
import { Flex } from "../global/display/Display";
import { DefaultButton } from "../global/button/Button";

export const CategoryNav = styled(Flex)`
  padding: 8px 12px;
  background-color: ${props => props.theme.colorgray5};
  border-top: 1px solid ${props => props.theme.colorgray3};
  border-bottom: 1px solid ${props => props.theme.colorgray5};
`;

export const CategoryToggleButton = styled(DefaultButton)`
  padding: 8px 12px;
  border: none;
  background-color: ${props => props.theme.colorgray3};
  border-radius: 4px;
  width: 160px;
  font-weight: 700;
`;