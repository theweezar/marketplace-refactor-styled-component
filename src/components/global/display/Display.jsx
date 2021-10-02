import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${props => props['justify-content'] || ''};
  align-items: ${props => props['align-items'] || ''};
  flex-wrap: ${props => props['no-wrap'] || 'wrap'};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

