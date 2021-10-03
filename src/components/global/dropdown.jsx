import _ from 'lodash';
import { Button3E } from './button/Button';
import { ItemTemplate, ListTemplate } from './list/List';
import { AbsoluteContainer } from './display/Position';

export const Dropdown = ({ children }) => {
  children = _.isArray(children) ? children : [children];
  const _children = {};
  _.map(children, (child) => {
    _children[child.type.name] = child;
  });
  console.log(_children);
  _children.Button3E.props.onClick = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      {_children.Button3E}
    </div>
  )
};

const Menu = ({ template, children }) => {
  return (
    <AbsoluteContainer>
      <ListTemplate template={template}>
        {children}
      </ListTemplate>
    </AbsoluteContainer>
  )
}

_.assign(Dropdown, {
  Toggle: Button3E,
  Menu: Menu,
  Item: ItemTemplate
});