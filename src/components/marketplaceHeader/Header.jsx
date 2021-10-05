import _ from "lodash";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineDashboard, AiTwotoneShop } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { FaProductHunt } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { IconImage24, Image } from "../global/image/Image";
import { Button, Button3E } from "../global/button/Button";
import { Text } from "../global/text/Text";
import { Navigator, Logo, HambugerButton, RightSideBar, RSBList, RSBLink, RSBText, LoginButtonWrapper, LoginButton } from "./headerStyles";
import { CategoryDropdownWrapper, CategoryDropdown, CategoryItem, CategoryNav, CategoryToggleButton, FilterButton, CategoryNavBarWrapper, CategoryNavBarButton, CategoryNavBarActive } from "./categoryNavStyles";
import { Dropdown3E } from "../global/dropdown";
import { Item } from "../global/list/List";
import { Flex } from "../global/display/Display";
import _logo from "../../static/images/logo.png";
import _tabAxie from "../../static/images/tab-axie.png";
import _tabLand from '../../static/images/tab-land.png';
import _tabItem from '../../static/images/tab-item.png';
import _tabBundle from '../../static/images/tab-bundle.png';

const categories = [
  { id: Math.random().toString(36).substr(2, 9), mid: 'Axies', start: <IconImage24 src={_tabAxie}/>, to: 'axies' },
  { id: Math.random().toString(36).substr(2, 9), mid: 'Lands', start: <IconImage24 src={_tabLand}/>, to: 'lands' },
  { id: Math.random().toString(36).substr(2, 9), mid: 'Items', start: <IconImage24 src={_tabItem}/>, to: 'items' },
  { id: Math.random().toString(36).substr(2, 9), mid: 'Bundles', start: <IconImage24 src={_tabBundle}/>, to: 'bundles' },
];

const RightSideBarContainer = ({ openSideBar, setOpenSideBar }) => {
  const items = [
    {to: "/", icon: <AiOutlineDashboard/>, text: "Dashboard"},
    {to: "/", icon: <AiTwotoneShop/>, text: "Marketplace"},
    {to: "/", icon: <FiHelpCircle/>, text: "Help"},
    {to: "/", icon: <FaProductHunt/>, text: "Product"}
  ];
  const ref = useDetectClickOutside({ onTriggered: (e) => {
    const rsbContainer = ref.current.querySelector('div#right-side-bar-nav');
    if (rsbContainer.getBoundingClientRect().left < window.innerWidth) {
      setOpenSideBar(false);
    }
  }});
  return (
    <div id="right-side-bar" ref={ref}>
      <RightSideBar openSideBar={openSideBar} id="right-side-bar-nav">
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

const CategoryDropDown = () => {
  return (
    <CategoryDropdownWrapper>
      <Dropdown3E
        menu={categories}
        selected="0"
        templateToggle={CategoryToggleButton}
        templateMenu={CategoryDropdown}
        templateItem={CategoryItem}
      />
    </CategoryDropdownWrapper>
  );
};

const CategoryNavBar = () => {
  const [_selected, setSelected] = useState(0);
  return (
    <CategoryNavBarWrapper id="category-navigator">
      {_.map(categories, (category, index) => {
        return (
          <Link to={category.to} key={category.id} onClick={() => setSelected(index)}>
            <Button3E>
              {category.start}
              {category.mid}
            </Button3E>
            <CategoryNavBarActive bottom="0" left="0" active={_selected === index ? true : false}/>
          </Link>
        );
      })}
    </CategoryNavBarWrapper>
  );
};

export const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <Navigator id="first-navigator">
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
      <CategoryNav justify-content="space-between" id="second-navigator">
        <CategoryDropDown />
        <Button template={FilterButton}>
          Filter
        </Button>
        <CategoryNavBar />
      </CategoryNav>
    </>
  )
}
