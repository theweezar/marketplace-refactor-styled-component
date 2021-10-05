import { DropdownItem, SearchResultContainer, SearchResultWrapper, SortSectionMobileWrapper, SortToggleButton } from "./searchResultStyle";
import { Dropdown3E } from "../../global/dropdown";

const SortSectionMobile = () => {
  const sortMenu = [
    { id: Math.random().toString(36).substr(2, 9), mid: 'Lowest Price'},
    { id: Math.random().toString(36).substr(2, 9), mid: 'Lowest ID'  },
    { id: Math.random().toString(36).substr(2, 9), mid: 'Highest ID'  },
    { id: Math.random().toString(36).substr(2, 9), mid: 'Highest Price'},
    { id: Math.random().toString(36).substr(2, 9), mid: 'Lastest'},
  ];
  return (
    <div>
      <SortSectionMobileWrapper justify-content="space-between">
        <Dropdown3E 
          menu={sortMenu}
          templateToggle={SortToggleButton}
          templateItem={DropdownItem}
        />
      </SortSectionMobileWrapper>
    </div>
  )
}

export const SearchResult = () => {
  return (
    <SearchResultContainer id="search-result-container">
      <SearchResultWrapper>
        <SortSectionMobile/>
      </SearchResultWrapper>
    </SearchResultContainer>
  )
}