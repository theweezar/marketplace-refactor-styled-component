import styled from "styled-components";

export const Relative = styled.div`
  position: relative;
`;

export const Absolute = styled.div`
  position: absolute;
  top: ${props => props.top || ''};
  right: ${props => props.right || ''};
  bottom: ${props => props.bottom || ''};
  left: ${props => props.left || ''};
`;

export const Fixed = styled(Absolute)`
  position: fixed;
`;

export const AbsoluteContainer = ({...props}) => {
  return (
    <Relative>
      <Absolute {...props} />
    </Relative>
  );
};

export const FixedContainer = ({...props}) => {
  return (
    <Relative>
      <Fixed {...props} />
    </Relative>
  );
};