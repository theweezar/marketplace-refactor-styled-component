import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Fragment } from "react";
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
