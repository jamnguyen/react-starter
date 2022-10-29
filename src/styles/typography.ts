import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    h4: false;
    h5: false;
    h6: false;
  }
}

const textFont = "'Space Grotesk', sans-serif";
const headingFont = "'Space Grotesk', sans-serif";

const textBase = {
  fontFamily: textFont,
  fontWeight: 400,
};

const headingBase = {
  fontFamily: headingFont,
  fontWeight: 900,
};

export default {
  fontFamily: textFont,
  h1: {
    ...headingBase,
    fontSize: 40,
  },
  h2: {
    ...headingBase,
    fontSize: 30,
  },
  h3: {
    ...headingBase,
    fontSize: 20,
  },
  body1: {
    ...textBase,
    fontSize: 18,
  },
  body2: {
    ...textBase,
    fontSize: 16,
  },
  body3: {
    ...textBase,
    fontSize: 14,
  },
  body4: {
    ...textBase,
    fontSize: 12,
  },
  button: {
    ...textBase,
    fontWeight: 700,
  },
} as TypographyOptions;
