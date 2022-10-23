import palette from '../palette';

export default {
  defaultProps: {
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: palette.primary['light'],
      },
    },
  },
};
