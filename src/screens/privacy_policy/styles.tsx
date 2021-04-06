import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      whiteSpace: 'pre-line',
      '& .tc__container': {
        padding: '2rem 1rem',
      },
      '& .tc__title': {
        marginTop: '4rem',
      },
      '& .tc__subTitle': {
        margin: 0,
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
      '&.content__container': {
        marginLeft: '1rem',
        display: 'flex',
      },
      '&.topic__title': {
        fontWeight: 500,
        whiteSpace: 'pre-line',
      },
      '&.text': {
        margin: '0 0 0rem 0.5rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
