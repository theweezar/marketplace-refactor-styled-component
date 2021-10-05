import { Link } from "react-router-dom";
import styled from "styled-components";
import { md } from "../global/styled";
import { Flex } from "../global/display/Display";
import { Text } from "../global/text/Text";
import { FixedContainer } from "../global/display/Position";
import { List } from "../global/list/List";
import { DefaultLink } from "../global/button/Button";

export const Navigator = styled.div`
  background-color: ${props => props.theme.colorgray6};
  width: 100%;
  display: flex;
`;

export const Logo = styled.div`
  padding: 8px 12px;
`;

export const HambugerButton = styled(Flex)`
  padding: 0 20px;
  color: white;
  font-size: 20px;
  margin-left: auto;
  ${md(`
    display: none;
  `)}
`;

export const RightSideBar = styled(FixedContainer)`
  height: 100vh;
  width: 80%;
  background-color: ${props => props.theme.colorgray5};
  top: 0;
  bottom: 0;
  right: ${props => props.openSideBar ? '0' : '-100%'};
  transition: 0.25s;
  z-index: 1020;
`;

export const RSBList = styled(List)`
  margin-top: 40px;
`

export const RSBLink = styled(Link)`
  padding: 12px 24px 12px 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: white;
`;

export const RSBText = styled(Text)`
  margin-left: 16px;
`

export const LoginButtonWrapper = styled.div`
  padding: 12px 24px 12px 50px;
`

export const LoginButton = styled(DefaultLink)`
  margin-top: 32px;
  font-size: 16px;
  padding: 8px 20px;
  border: 1px solid ${props => props.theme.colorprimary4};
  background-color: ${props => props.theme.colorprimary4};
  border-radius: 4px;
  width: auto;
`;

