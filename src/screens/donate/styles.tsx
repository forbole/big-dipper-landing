import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      '& .donate__container': {
        padding: '2rem 1rem',
      },
      '& .donate__title': {
        fontSize: '1.75rem',
        fontWeight: 400,
        margin: 0,
        marginTop: '4rem',
      },
      '& .context': {
        margin: '1rem 0 1rem 0',
        marginBottom: theme?.palette?.custom?.gutters?.small,
      },
      '& .card': {
        padding: '1.5rem 1rem',
      },
      '& .container': {
        display: 'flex',
      },
      '& h2': {
        margin: '0.3rem 0 0 0',
        fontWeight: 400,
        fontSize: '1.5rem',
      },
      '& img': {
        width: '4.25rem',
        height: '4.25rem',
        borderRadius: 50,
      },
      '& .text-container': {
        marginLeft: '1rem',
        marginRight: '1rem',
      },
      '& .copy-icon': {
        marginLeft: '0.3rem',
        color: '#999999',
        width: '1rem',
        height: '1rem',
      },
      '& .details': {
        margin: '0 1rem 0 m',
        display: 'flex',
        wordBreak: 'break-all',
        '&:hover': {
          cursor: 'pointer',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '& .card': {
          padding: '2rem 1.5rem',
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
        '& .donate__container': {
          padding: '3.5rem 1rem',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.maxWidth)]: {
        '& .max-width__parent': {
          marginBottom: '20rem',
        },
      },
    },
  });
  return {
    classes: useStyles(),
  };
};
