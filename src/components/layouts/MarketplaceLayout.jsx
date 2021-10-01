import styled from "styled-components";
import { Header } from "../header/Header";

const Layout = styled.div`
  position: relative;
`;

export const MarketplaceLayout = ({ children }) => {
  return (
    <Layout>
      <Header/>
      {children}
    </Layout>
  );
};