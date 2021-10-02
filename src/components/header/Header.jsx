import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Image } from "../global/image/Image";
import { Navigator, Logo, HambugerButton, RightSideBar, RSBLink, RSBText } from "./styles";
import { List, Item } from "../global/list";
import { Flex } from "../global/display/Display";
import _logo from "../../static/images/logo.png";

const RightSideBarContainer = () => {
  return (
    <RightSideBar>
      <List>
        <Item>
          <RSBLink to="/">
            <Flex align-items="center">
              <AiOutlineDashboard/>
            </Flex>
            <RSBText>Hello world</RSBText>
          </RSBLink>
        </Item>
      </List>
    </RightSideBar>
  )
}

export const Header = () => {
  return (
    <Navigator>
      <RightSideBarContainer />
      <Logo>
        <Link to="/">
          <Image src={_logo} width="66px" height="36px"/>
        </Link>
      </Logo>
      <HambugerButton justify-content="center" align-items="center">
        <GiHamburgerMenu/>
      </HambugerButton>
    </Navigator>
  )
}