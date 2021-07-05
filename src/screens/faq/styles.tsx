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
        fontWeight: 700,
        // marginTop: '4rem',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
      },
      '& .topic__title': {
        fontSize: '0rem',
        fontWeight: 500,
        margin: '1rem 0 0.5rem',
        visibility: 'hidden',
      },
      '& .paragraph': {
        // marginTop: '0.5rem',
        // paddingLeft: '6rem',
      },
      '& .container': {
        display: 'flex',
        // paddingTop: '20px',
      },
      '& .point': {
        fontWeight: 500,
        color: '#000000DE',
        whiteSpace: 'nowrap',
      },
      '& .context': {
        marginTop: '0rem 0 2rem 0',
        marginBottom: theme?.palette?.custom?.gutters?.small,
        '& .mail-link': {
          color: theme.palette.custom.fonts.fontFive,
        },
      },
      '& .subTitle': {
        marginBottom: '5px',
        fontWeight: 500,
        fontSize: '1.125rem',
      },
      '& .details': {
        margin: '0',
        marginBottom: '4rem',
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
        // marginTop: '2rem',
        // marginBottom: '2rem',
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
        fontSize: '1.25rem',
        margin: 0,
      },
      '& .table-content__wrapper': {
        width: '30%',
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
          minHeight: '90vh',
        },
        '& .max-width__content': {
          width: '100%',
          maxWidth: theme?.breakpoints?.values?.maxWidth,
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
