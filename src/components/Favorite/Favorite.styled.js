import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyledFavorite = styled(Link)`
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;
