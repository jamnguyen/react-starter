import {
  Box,
  Avatar as MUIAvatar,
  Container as MUIContainer,
  Typography,
  styled,
} from '@mui/material';

import { ArrowBackIcon } from '../icon';
import { Link } from '../link';

export const Background = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  height: theme.layout.headerSize.xs,
  position: 'fixed',
  width: '100vw',
  zIndex: 999,

  [theme.breakpoints.up('md')]: {
    height: theme.layout.headerSize.lg,
  },
}));

export const Container = styled(MUIContainer)(() => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
}));

export const ButtonWrapper = styled(Box)(() => ({
  width: '20%',
}));

export const LogoLink = styled(Link)(() => ({
  height: '70%',
}));

export const LogoImg = styled('img')(() => ({
  height: '100%',
  objectFit: 'contain',
  width: 'auto',
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'unset',
    fontSize: 30,
  },
}));
LogoText.defaultProps = {
  variant: 'h1',
};

export const BackIcon = styled(ArrowBackIcon)(({ theme }) => ({
  fontSize: 30,
  marginTop: 6,

  [theme.breakpoints.up('md')]: {
    fontSize: 36,
    marginTop: 12,
  },
}));

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: 32,
  width: 32,

  [theme.breakpoints.up('md')]: {
    height: 40,
    width: 40,
  },
}));
