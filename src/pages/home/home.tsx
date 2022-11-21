import { Box, Typography } from '@mui/material';

import { Link, Page } from '~src/components';
import { ROUTES } from '~src/constants/routes';

export function HomePage() {
  return (
    <Page>
      <Typography variant="body2" component="p" gutterBottom>
        A React-based template repository using my favorite stucture and
        libraries.
      </Typography>
      <Box mt={2}>
        <Link to={ROUTES.STYLE_GUIDE.path}>
          <Typography variant="h3">Style guide</Typography>
        </Link>
      </Box>
    </Page>
  );
}
