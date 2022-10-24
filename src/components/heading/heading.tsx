import { Typography } from '@mui/material';

import { HeadingProps } from './heading.interface';

export function Heading({ children }: HeadingProps) {
  return <Typography>{children}</Typography>;
}
