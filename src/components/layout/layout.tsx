import { Container, Grid, Typography } from '@mui/material';

import { useRoute } from '~src/hooks';

import { HeadingProps, PageProps } from './layout.interface';
import { HeadingWrapper, PageLayout } from './layout.styled';

export function Heading({ children, actionBar }: HeadingProps) {
  const {
    route: { name },
  } = useRoute();

  return (
    <HeadingWrapper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Grid item>
          <Typography variant="h1">{children || name}</Typography>
        </Grid>
        {actionBar && <Grid item>{actionBar}</Grid>}
      </Grid>
    </HeadingWrapper>
  );
}

export function Page({ children, actionBar, withHeading = false }: PageProps) {
  return (
    <PageLayout>
      <Container>
        {withHeading && <Heading actionBar={actionBar} />}
        {children}
      </Container>
    </PageLayout>
  );
}
