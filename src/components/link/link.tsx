import { LinkProps } from 'react-router-dom';

import { StyledLink } from './link.styled';

export function Link(props: LinkProps) {
  return <StyledLink {...props} />;
}
