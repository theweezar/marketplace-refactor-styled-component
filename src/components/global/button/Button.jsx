import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from '../display/Display';

const buttonStyle = (props) => {
  return `
    padding: 8px 12px;
    color: white;
    font-size: 14px;
    border: 1px solid ${props.theme.colorgray2};
    border-radius: 0;
    background-color: transparent;
    width: auto;
    display: inline-block;
    cursor: pointer;

    &.active {
      background-color: ${props.theme.colorgray6};
      border: 1px solid ${props.theme.colorgray4};
    }
  `
}

export const DefaultButton = styled.button`
  ${props => buttonStyle(props)}
`;

export const DefaultLink = styled(Link)`
${props => buttonStyle(props)}
`;

const MidEFlex = styled(Flex)`
  padding-left: 8px;
`

export const Button = ({to, children, template, onClick}) => {
  const TemplateButton = template || DefaultButton;
  return (
    <TemplateButton to={to || ""} onClick={onClick}>
      {children}
    </TemplateButton>
  )
}

export const Button3E = ({to, children, template, onClick}) => {
  const TemplateButton = template || DefaultButton;
  children = children ? children : [];
  const _start = children[0] || null;
  const _mid = children[1] || null;
  const _end = children[2] || null;
  return (
    <TemplateButton to={to || ""} onClick={onClick}>
      <Flex justify-content={_end ? "space-between" : "center"}>
        <Flex align-items="center">
          {_start}
          <MidEFlex justify-content="center" align-items="center">
            {_mid}
          </MidEFlex>
        </Flex>
        <Flex justify-content="center" align-items="center" style={{fontSize: '20px'}}>
          {_end}
        </Flex>
      </Flex>
    </TemplateButton>
  );
};
