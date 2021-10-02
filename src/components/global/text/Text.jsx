import styled from "styled-components";

export const Text = ({...props}) => {
  var Element = styled.div``;
  Element = props.span ? styled.span`` : Element;
  Element = props.p ? styled.p`` : Element;
  Element = props.h1 ? styled.h1`` : Element;
  Element = props.h2 ? styled.h2`` : Element;
  Element = props.h3 ? styled.h3`` : Element;
  Element = props.h4 ? styled.h4`` : Element;
  Element = props.h5 ? styled.h5`` : Element;
  Element = props.h6 ? styled.h6`` : Element;

  return (
    <Element {...props}></Element>
  );
}