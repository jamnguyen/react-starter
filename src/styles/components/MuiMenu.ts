import { Theme, alpha } from '@mui/material';

export default {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        '.MuiPaper-root': {
          boxShadow: `0 0 1.5rem ${alpha(theme.palette.common.black, 0.1)}`,
        },
      };
    },
  },
};
