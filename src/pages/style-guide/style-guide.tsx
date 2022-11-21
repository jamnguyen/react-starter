import { Button, Grid, Typography } from '@mui/material';

import { Heading, Page } from '~src/components';

export function StyleGuidePage() {
  return (
    <Page>
      <Heading>Style Guide</Heading>
      <Grid container spacing={2}>
        <Grid item container xs={12} spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              Contained Primary
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Contained Secondary
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary">
              Outlined Primary
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              Outlined Secondary
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item>
            <Button variant="text" color="primary">
              Text Primary
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="secondary">
              Text Secondary
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">Heading 1</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Heading 2</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Heading 3</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Subtitle 1</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Subtitle 2</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            est sem, mattis sed gravida et, lacinia non nisi. Pellentesque sed
            sem lectus. Suspendisse at justo condimentum, pellentesque ipsum
            vel, accumsan risus.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            est sem, mattis sed gravida et, lacinia non nisi. Pellentesque sed
            sem lectus. Suspendisse at justo condimentum, pellentesque ipsum
            vel, accumsan risus.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body3">
            Body 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            est sem, mattis sed gravida et, lacinia non nisi. Pellentesque sed
            sem lectus. Suspendisse at justo condimentum, pellentesque ipsum
            vel, accumsan risus.
          </Typography>
        </Grid>
      </Grid>
    </Page>
  );
}
