import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    layout: {
      background: theme?.palette?.type === 'light' ? theme?.palette?.background?.paper : theme?.palette?.background?.background,
    },
    root: {
      '& .faq__container': {
        padding: '2rem 1rem',
      },
      '& .faq__title': {
        fontSize: '1.75rem',
        fontWeight: 400,
        margin: 0,
        marginTop: '4rem',
      },
      '& .topic__title': {
        fontSize: '1.5rem',
        fontWeight: 400,
        margin: '0rem 0 0.5rem',
      },
      '&.paragraph': {
        marginTop: '2rem',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .max-width__parent': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .max-width__content': {
          width: '100%',
          maxWidth: theme?.breakpoints?.values?.maxWidth,
        },
        '& .faq__title': {
          fontSize: '2rem',
        },
        '& .faq__container': {
          padding: '3.5rem 1rem',
        },
      },
    },
    context: {
      marginTop: '1rem',
      margin: '0',
      fontSize: theme?.typography?.paragraph?.fontSize,
      color: theme.palette.custom.fonts.fontTwo,
      marginBottom: theme?.palette?.custom?.gutters?.small,
      '& .mail-link': {
        color: theme.palette.custom.fonts.fontFive,
      },
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1rem',
      },
    },
    subTitle: {
      marginTop: '0',
      marginBottom: theme?.palette?.custom?.gutters?.small,
      fontWeight: 300,
      color: theme.palette.custom.fonts.fontTwo,
      fontSize: '1.25rem',
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1.25rem',
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        fontSize: '1.375rem',
      },
    },
    paragraph: {
      margin: '0',
      marginBottom: theme.palette.custom.margins.large,
      color: theme.palette.custom.fonts.fontThree,
      whiteSpace: 'pre-line',
    },
  });
  return {
    classes: useStyles(),
  };
};
