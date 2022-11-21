import { Typography } from '@mui/material';

import { ROUTES } from '~src/constants';
import { useRoute } from '~src/hooks';

import { Link } from '../link';
import {
  BackIcon,
  Background,
  ButtonWrapper,
  Container,
  LogoLink,
} from './header.styled';
import UserMenu from './user-menu';

export function Header() {
  const {
    route: { parent },
  } = useRoute();

  return (
    <Background>
      <Container>
        <ButtonWrapper ml={-1}>
          {parent && (
            <Link to={parent.path}>
              <BackIcon />
            </Link>
          )}
        </ButtonWrapper>
        <LogoLink to={ROUTES.HOME.path}>
          <Typography variant="h2">React Starter</Typography>
        </LogoLink>
        <ButtonWrapper textAlign="right" mr={-1}>
          <UserMenu />
        </ButtonWrapper>
      </Container>
    </Background>
  );
}
