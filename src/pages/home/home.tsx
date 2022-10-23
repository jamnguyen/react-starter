import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAppConfig } from '~src/app';

export function HomePage() {
  const { name, author, version } = useSelector(selectAppConfig);

  return (
    <Box>
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body2">{author}</Typography>
      <Typography variant="body2">{version}</Typography>
      <Button variant="contained">Test</Button>
      <Button color="secondary">Test</Button>
    </Box>
  );
}
