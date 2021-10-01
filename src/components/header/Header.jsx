import styled from "styled-components";
import { Image } from "../image/Image";
import _logo from "../../static/images/logo.png";

const Navigator = styled.div`
  background-color: ${props => props.theme.colorgray6};
  width: 100%;
  display: flex;
`;

const Logo = styled.div`
  padding: 8px 12px;
`;

const HambugerButton = styled.div`
  padding: 0 20px;
  color: white;
  font-size: 20px;
`;

export const Header = () => {
  return (
    <Navigator>
      <Logo>
        <Image src={_logo} width="66px" height="36px"/>
      </Logo>
    </Navigator>
  )
}