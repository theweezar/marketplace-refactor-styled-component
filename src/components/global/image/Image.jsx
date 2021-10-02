import styled from 'styled-components';

const StyleImage = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`;

export function Image(props) {
  const width = props.width || '100%';
  const height = props.height || 'auto';
  return (
    <StyleImage alt="icon24" className={props.className} srcSet={props.src} width={width} height={height} />
  )
}

export function IconImage24(props) {
  return (
    <StyleImage alt="icon24" className={props.className} srcSet={props.src} width="24px" height="24px"/>
  );
}

export function IconImage36(props) {
  return (
    <StyleImage alt="icon36" className={props.className} srcSet={props.src} width="36px" height="36px"/>
  );
}

export function IconImage48(props) {
  return (
    <StyleImage alt="icon48" className={props.className} srcSet={props.src} width="48px" height="48px"/>
  );
}

export function IconImage56(props) {
  return (
    <StyleImage alt="icon56" className={props.className} srcSet={props.src} width="56px" height="56px"/>
  );
}

export function IconImage64(props) {
  return (
    <StyleImage alt="icon64" className={props.className} srcSet={props.src} width="64px" height="64px"/>
  );
}