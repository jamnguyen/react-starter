import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Heading } from '~/src/components';
import { selectAppConfig } from '~src/app';

export function HomePage() {
  const { name, author, version } = useSelector(selectAppConfig);

  return (
    <Box>
      <Heading>{name}</Heading>
      <Heading>{author}</Heading>
      <Heading>{version}</Heading>
    </Box>
  );
}
