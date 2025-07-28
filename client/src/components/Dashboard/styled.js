import styled from 'styled-components';

export const NavContainer = styled.div`
  max-width: 1100px;

  height: 150px;
  width: 100%;
  display: flex;
  justify-content: ${({ isScrolledAway }) =>
    isScrolledAway ? 'space-around' : 'center'};
  flex-direction: column;
  margin: 0 auto;
`;