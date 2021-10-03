import _ from 'lodash';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Button3E } from './button/Button';
import { FaAngleDown } from 'react-icons/fa';
import { Item, ListTemplate } from './list/List';
import { AbsoluteContainer } from './display/Position';
import { useState } from 'react';
import { randomString } from '../../scripts/randomHelpers';

export const Dropdown3E = ({ selected, menu, templateToggle, templateMenu, templateItem }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [_selected, setSelected] = useState(selected);
  const _containerStyle = {
    width: '100%',
    display: isDrop ? 'block' : 'none',
    marginTop: '4px'
  };
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setIsDrop(false);
    }
  })
  const itemOnClick = (index, event) => {
    setSelected(index);
    setIsDrop(false);
  }
  
  return (
    <div ref={ref}>
      <Button3E onClick={() => setIsDrop(!isDrop)} template={templateToggle}>
        {menu[_selected].start}
        {menu[_selected].mid}
        {menu[_selected].end || <FaAngleDown style={{fontSize: "20px"}}/>}
      </Button3E>
      <AbsoluteContainer style={_containerStyle}>
        <ListTemplate template={templateMenu} direction="column">
          {_.map(menu, (item, index) => {
            return (
              <Item key={randomString(8)}>
                <Button3E template={templateItem} onClick={() => itemOnClick(index)} to={item.to}>
                  {item.start}
                  {item.mid}
                  {item.end || <></>}
                </Button3E>
              </Item>
            )
          })}
        </ListTemplate>
      </AbsoluteContainer>
    </div>
  )
};