import { TypographyOptions } from '@mui/material/styles/createTypography';

const textFont = "'Commissioner', san-serif";
const headingFont = "'Playfair Display', serif";

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
  button: {
    ...textBase,
    fontWeight: 700,
  },
} as TypographyOptions;
