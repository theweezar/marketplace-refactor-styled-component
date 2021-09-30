import './index.css';
import styled from 'styled-components';
import { propStyle, margin } from './components/global/styled';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  ${margin({
    lg: '400px 0 0 0',
    md: '150px 0 0 0'
  })}
`;

const Wrapper = styled.section`
  background: papayawhip;
`;

function App() {
  return (
    <Wrapper m-lg-4rem p-md-8rem>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  );
}

export default App;
