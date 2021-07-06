import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      '& #topic-title': {
        marginTop: 0,
        fontWeight: 500,
      },
      '& .link': {
        color: theme.palette.custom.fonts.fontFive,
      },
      '& .faq__container': {
        padding: '4rem 1rem',
      },
      '& .faq__title': {
        fontWeight: 700,
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
        flex: 1,
      },
      '& .container': {
        display: 'flex',
      },
      '& .point': {
        fontWeight: 500,
        color: '#000000DE',
        whiteSpace: 'nowrap',
      },
      '& .context': {
        marginBottom: '1.5rem',
      },
      '& .subTitle': {
        marginBottom: '1rem',
        fontWeight: 500,
        marginTop: 0,
      },
      '& .details': {
        margin: '0',
        marginBottom: '4rem',
        color: '#414141',
        lineHeight: 2,
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
        textDecoration: 'none',
        color: '#414141',
        '&:first-child': {
          marginTop: 0,
        },
        '&:hover': {
          cursor: 'pointer',
        },
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
        display: 'none',
        [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
          display: 'block',
          minWidth: '200px',
          marginRight: '2rem',
        },
      },
      '& .sticky_box': {
        whiteSpace: 'nowrap',
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
