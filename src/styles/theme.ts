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
      margins: {
        large: '24px',
        medium: '16px',
        small: '16px',
      },
    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride = {
  palette: {
    type: 'light',
    custom: {
      backgroundExample: 'rgba(246, 247, 249, 1)',
      fonts: {
        fontOne: 'rgba(0, 0, 0, 1)', // header
        fontTwo: 'rgba(65, 65, 65, 1)', // body and paragraph
        fontThree: 'rgba(119, 119, 119, 1)', // subfonts
        fontFour: 'rgba(153, 153, 153, 1)', // placeholders
        fontFive: 'rgba(29, 134, 255, 1)', // names and address (links)
        fontOneToTwo: 'rgba(0, 0, 0, 1)', // fonts the switch from fontOne in light mode to fontTwo in dark mode
      },
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
