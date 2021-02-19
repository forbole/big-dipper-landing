import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          position: 'relative',
          '& .nav__container': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            padding: '1rem',
          },
          '& .nav__logo': {
            width: '180px',
          },
        },

        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

        },
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        },

      }));
  });
  return {
    classes: useStyles(),
  };
};
