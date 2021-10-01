import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { WRAPTHEME } from "./components/global/theme";
import { MarketplaceLayout } from "./components/layouts/MarketplaceLayout";
import { MarketplaceBody } from "./components/layouts/MarketplaceBody";
import { GlobalStyle } from "./components/global/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={WRAPTHEME}>
      <BrowserRouter>
        <Fragment>
          <GlobalStyle/>
          <Route path="/">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Marketplace</title>
            </Helmet>
            <MarketplaceLayout>
              <MarketplaceBody/>
            </MarketplaceLayout>
          </Route>
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
