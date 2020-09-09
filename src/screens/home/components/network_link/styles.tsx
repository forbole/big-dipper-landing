import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          '&.network__item--link': {
            textDecoration: 'none',
            background: '#c1bdbd',
            padding: '0.5rem 1rem',
            color: 'white',
            fontSize: '0.875rem',
            borderRadius: '5px',
            margin: '0.25rem',
          },
          '&.mainnet': {
            background: '#1EC490',
          },
          '&.testnet': {
            background: '#FF7549',
          },
          '&.retired': {
            background: '#497BFF',
          },
          '&.other': {
            background: '#c1bdbd',
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {

          },

        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
