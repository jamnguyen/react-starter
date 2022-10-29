import { Box, styled } from '@mui/material';

export const PageLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
}));

export const BackerContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  a: {
    color: theme.palette.grey[400],
    fontSize: theme.typography.body2.fontSize,
  },
  '.MuiSvgIcon-root': {
    fontSize: 18,
    transform: 'translateY(3px)',
    marginRight: theme.spacing(0.5),
  },
}));
