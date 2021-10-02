import styled from "styled-components";

const Div = styled.div``;
const Span = styled.span``;
const P = styled.p``;
const H1 = styled.h1``;
const H2 = styled.h2``;
const H3 = styled.h3``;
const H4 = styled.h4``;
const H5 = styled.h5``;
const H6 = styled.h6``;

export const Text = ({...props}) => {
  var Element = Div;
  Element = props.span ? Span : Element;
  Element = props.p ? P : Element;
  Element = props.h1 ? H1`` : Element;
  Element = props.h2 ? H2`` : Element;
  Element = props.h3 ? H3`` : Element;
  Element = props.h4 ? H4`` : Element;
  Element = props.h5 ? H5`` : Element;
  Element = props.h6 ? H6`` : Element;

  return (
    <Element {...props}></Element>
  );
};
