import { Typography } from '@mui/material';

import { Link, Page } from '~src/components';
import { ROUTES } from '~src/constants/routes';

export function HomePage() {
  return (
    <Page>
      <Link to={ROUTES.STYLE_GUIDE.path}>
        <Typography variant="h3">Style guide</Typography>
      </Link>
    </Page>
  );
}
