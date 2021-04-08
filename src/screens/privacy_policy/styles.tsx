import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      whiteSpace: 'pre-line',
      '& h1, & h2, & h3': {
        fontWeight: 500,
      },
      '& .tc__container': {
        padding: '4rem 1rem',
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
        '& .tc__container': {
          padding: '3.5rem 1rem',
        },
      },
    },
    text: {
      '&.topic__title': {
        fontWeight: 500,
        whiteSpace: 'pre-line',
      },
      '&.text': {
        margin: '0 0 0rem 0.5rem',
      },
    },
    content__container: {
      margin: '1rem 0',
      marginLeft: '1rem',
      display: 'flex',
    },
  });

  return {
    classes: useStyles(),
  };
};
