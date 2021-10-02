import { Link } from "react-router-dom";
import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineDashboard, AiTwotoneShop } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { FaProductHunt } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { Image } from "../global/image/Image";
import { Button3E } from "../global/button/Button";
import { Text } from "../global/text/Text";
import { Navigator, Logo, HambugerButton, RightSideBar, RSBList, RSBLink, RSBText, LoginButtonWrapper, LoginButton } from "./headerStyles";
import { Item } from "../global/list/List";
import { Flex } from "../global/display/Display";
import _logo from "../../static/images/logo.png";


const RightSideBarContainer = ({ openSideBar, setOpenSideBar }) => {
  const items = [
    {to: "/", icon: <AiOutlineDashboard/>, text: "Dashboard"},
    {to: "/", icon: <AiTwotoneShop/>, text: "Marketplace"},
    {to: "/", icon: <FiHelpCircle/>, text: "Help"},
    {to: "/", icon: <FaProductHunt/>, text: "Product"}
  ];
  const ref = useDetectClickOutside({ onTriggered: (e) => {
    console.log(e);
  }});
  return (
    <div ref={ref}>
      <RightSideBar openSideBar={openSideBar}>
        <RSBList direction="column">
          {items.map((item, index) => {
            return (
              <Item key={index}>
                <RSBLink to={item.to}>
                  <Flex align-items="center">
                    {item.icon}
                  </Flex>
                  <RSBText>{item.text}</RSBText>
                </RSBLink>
              </Item>
            )
          })}
          <Item>
            <LoginButtonWrapper>
              <Button3E template={LoginButton} to="/login">
                <BiLogIn/>
                <Text>Login</Text>
              </Button3E>
            </LoginButtonWrapper>
          </Item>
        </RSBList>
      </RightSideBar>
    </div>
  )
}

export const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <Navigator>
      <RightSideBarContainer openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
      <Logo>
        <Link to="/">
          <Image src={_logo} width="66px" height="36px"/>
        </Link>
      </Logo>
      <HambugerButton justify-content="center" align-items="center">
        <GiHamburgerMenu onClick={() => setOpenSideBar(true)}/>
      </HambugerButton>
    </Navigator>
  )
}