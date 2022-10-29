import { Box, Container, Grid, Typography } from '@mui/material';
import { useRoute } from '~src/hooks';
import { HasChildrenProps } from '~src/interfaces';

import { ArrowBackIcon } from '../icon';
import { Link } from '../link';
import { HeadingProps } from './layout.interface';
import { BackerContainer, PageLayout } from './layout.styled';

export function Page({ children }: HasChildrenProps) {
  return (
    <PageLayout>
      <Container>{children}</Container>
    </PageLayout>
  );
}

export function Heading({ children, actionBar }: HeadingProps) {
  const {
    route: { parent },
  } = useRoute();

  return (
    <Box>
      {parent && (
        <BackerContainer>
          <Link to={parent.path}>
            <ArrowBackIcon />
            {parent.name}
          </Link>
        </BackerContainer>
      )}
      <Grid container direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <Grid item>
          <Typography variant="h1">{children}</Typography>
        </Grid>
        {actionBar && <Grid item>{actionBar}</Grid>}
      </Grid>
    </Box>
  );
}
