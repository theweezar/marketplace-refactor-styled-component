import styled from "styled-components";
import { Flex } from "../global/display/Display";
import { SearchResult } from "../pages/search/SearchResult";

const MarketplaceBodyFlex = styled(Flex)`
  position: relative;
`

export const MarketplaceBody = () => {
  return (
    <MarketplaceBodyFlex id="marketplace-body">
      <SearchResult>

      </SearchResult>
    </MarketplaceBodyFlex>
  );
}
