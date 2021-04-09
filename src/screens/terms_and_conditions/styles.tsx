import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      '& .tc__container': {
        padding: '2rem 1rem',
      },
      '& .tc__title': {
        fontSize: '1.75rem',
        fontWeight: 400,
        margin: 0,
        marginTop: '4rem',
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
        '& .tc__title': {
          fontSize: '2rem',
        },
        '& .tc__container': {
          padding: '3.5rem 1rem',
        },
      },
    },
    text: {
      fontSize: '1rem',
      margin: '0',
      whiteSpace: 'pre-wrap',
      '&.topic__title': {
        margin: '1rem 0 0.5rem 2rem',
        fontWeight: 400,
        display: 'flex',
      },
      '&.details_container': {
        marginLeft: '4rem',
        display: 'flex',
      },
      '&.text': {
        marginLeft: '0.5rem',
        marginBottom: '0.5rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
