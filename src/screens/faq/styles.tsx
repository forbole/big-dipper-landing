import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      '& .faq__container': {
        padding: '4rem 1rem',
      },
      '& .faq__title': {
        fontWeight: 500,
      },
      '& .topic__title': {
        fontSize: '1.75rem',
        fontWeight: 500,
        margin: '1rem 0 0.5rem',
      },
      '&.paragraph': {
        marginTop: '2rem',
      },
      '& .context': {
        margin: '1rem 0 2rem 0',

        marginBottom: theme?.palette?.custom?.gutters?.small,
        '& .mail-link': {
          color: theme.palette.custom.fonts.fontFive,
        },
      },
      '& .subTitle': {
        marginTop: '0',
        marginBottom: '5px',
        fontWeight: 500,
        fontSize: '1rem',
        [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
          fontSize: '1rem',
        },
        [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
          fontSize: '1rem',
        },
      },
      '& .details': {
        margin: '0',
        marginBottom: theme.palette.custom.margins.large,
        color: '#414141',
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
