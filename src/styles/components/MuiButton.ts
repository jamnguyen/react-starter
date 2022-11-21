import { Theme } from '@mui/material';

export default {
  defaultProps: {
    variant: 'contained',
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      boxShadow: 'none',
      transitionDuration: '0s',
      textTransform: 'none',
      '&:hover, &:active, &:focus-visible': {
        boxShadow: 'none',
      },
    },
    containedPrimary({ theme }: { theme: Theme }) {
      return {
        '&:hover, &:active': {
          backgroundColor: theme.palette.primary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.dark}`,
        },
      };
    },
    containedSecondary({ theme }: { theme: Theme }) {
      return {
        '&:hover, &:active': {
          backgroundColor: theme.palette.secondary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.dark}`,
        },
      };
    },
    outlinedPrimary({ theme }: { theme: Theme }) {
      return {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        '&:hover, &:active': {
          borderColor: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      };
    },
    outlinedSecondary({ theme }: { theme: Theme }) {
      return {
        borderColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.dark,
        '&:hover, &:active': {
          borderColor: theme.palette.secondary.dark,
          backgroundColor: theme.palette.secondary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.main}`,
        },
      };
    },
    text({ theme }: { theme: Theme }) {
      return {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      };
    },
    textPrimary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.primary.dark,
        '&:hover, &:active': {
          backgroundColor: theme.palette.primary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      };
    },
    textSecondary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.secondary.dark,
        '&:hover, &:active': {
          backgroundColor: theme.palette.secondary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.main}`,
        },
      };
    },
  },
};
