import * as R from 'ramda';

/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'mobile', 'tablet', 'desktop'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 769,
      desktop: 1080,
      maxWidth: 1280,
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      'Arial',
    ].join(','),
    body3: {
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: 'rgba(253, 59, 76, 1)',
    },
    secondary: {
      main: 'rgba(58, 211, 158, 1)',
    },
    custom: {
      white: 'rgba(255, 255, 255, 1)',
    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride = {
  palette: {
    type: 'light',
    custom: {
      backgroundExample: 'rgba(246, 247, 249, 1)',
    },
  },
};

/** Custom theme overrides for dark mode */
const darkThemeOverride = {
  palette: {
    type: 'dark',
    custom: {
      backgroundExample: 'rgba(10, 10, 10, 1)',
    },
  },
};

export const lightTheme = R.mergeDeepLeft(lightThemeOverride, common);
export const darkTheme = R.mergeDeepLeft(darkThemeOverride, common);
