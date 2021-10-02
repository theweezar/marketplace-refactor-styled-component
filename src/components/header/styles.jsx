import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../global/display/Display";
import { Text } from "../global/text/Text";
import { FixedContainer } from "../global/display/Position";

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
`;

export const RightSideBar = styled(FixedContainer)`
  height: 100vh;
  width: 80%;
  background-color: ${props => props.theme.colorgray5};
  top: 0;
  bottom: 0;
  right: 0;
`;

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