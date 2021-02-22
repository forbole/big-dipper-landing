import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
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
      '& .context': {
        margin: '1rem 0 1rem 0',

        marginBottom: theme?.palette?.custom?.gutters?.small,
        '& .mail-link': {
          color: theme.palette.custom.fonts.fontFive,
        },
      },
      '& .subTitle': {
        marginTop: '0',
        marginBottom: theme?.palette?.custom?.gutters?.small,
        fontWeight: 400,
        fontSize: '1.25rem',
        [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
          fontSize: '1.25rem',
        },
        [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
          fontSize: '1.375rem',
        },
      },
      '& .details': {
        margin: '0',
        marginBottom: theme.palette.custom.margins.large,
        whiteSpace: 'pre-line',
        '&.details_container': {
          margin: '0.3rem 0 0 2rem',
          display: 'flex',
        },
        '&.text': {
          marginLeft: '0.5rem',
          marginBottom: '0.5rem',
        },
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
  });
  return {
    classes: useStyles(),
  };
};