import { Box, styled } from '@mui/material';

export const PageLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(2),
    paddingTop: `calc(${theme.layout.headerSize.xs} + ${theme.spacing(2)})`,
  },
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(6),
    paddingTop: `calc(${theme.layout.headerSize.lg} + ${theme.spacing(6)})`,
  },
}));

export const HeadingWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));
