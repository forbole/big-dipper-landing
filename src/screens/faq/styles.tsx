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
        marginTop: '4rem',
      },
      '& .topic__title': {
        fontSize: '0rem',
        fontWeight: 500,
        margin: '1rem 0 0.5rem',
        visibility: 'hidden',
      },
      '& .paragraph': {
        marginTop: '1.25rem',
        paddingLeft: '6rem',
      },
      '& .container': {
        display: 'flex',
        paddingTop: '20px',
      },
      '& .context': {
        margin: '1rem 0 2rem 0',
        marginBottom: theme?.palette?.custom?.gutters?.small,
        '& .mail-link': {
          color: theme.palette.custom.fonts.fontFive,
        },
      },
      '& .subTitle': {
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
      '& .menu_title': {
        fontWeight: 500,
        fontSize: '1rem',
        marginTop: '2rem',
        textDecoration: 'none',
        color: '#414141',
      },
      '& .menu_subtitle': {
        marginTop: '0.5rem',
        textDecoration: 'none',
        color: '#414141',
      },
      '& a': {
        textDecoration: 'none',
        color: '#414141',
      },
      '& h3': {
        width: 'max-content',
        marginRight: '2rem',
        fontSize: '1.25rem',
      },
      '& .sticky_box': {
        paddingLeft: '0',
        display: 'none',
        [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
          display: 'block',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .max-width__parent': {
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'flex-start',
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
