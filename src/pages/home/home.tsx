import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAppConfig } from '~src/app';
import { Heading, Link, Page } from '~src/components';
import { ROUTES } from '~src/constants/routes';

export function HomePage() {
  const { name, author, version } = useSelector(selectAppConfig);

  return (
    <Page>
      <Heading>{name}</Heading>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2">{author}</Typography>
          <Typography variant="body2">{version}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to={ROUTES.STYLE_GUIDE.path}>
            <Typography variant="h3">Style guide</Typography>
          </Link>
        </Grid>
      </Grid>
    </Page>
  );
}
