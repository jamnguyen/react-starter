import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  display: 'inline-block',
  textDecoration: 'none',
  ':hover': {
    color: theme.palette.primary.main,
  },
}));
