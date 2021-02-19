import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          '&.footer': {
            background: '#131316',
            padding: '3rem 1.5rem 4rem',
            color: 'white',
          },
          '& p': {
            marginTop: 0,
            marginBottom: '0.5rem',
          },
          '& .footer__slogan': {
            marginTop: '0.2rem',
          },
          '& .footer__donate--excerpt': {
            margin: '1.5rem 0 1rem',
            fontSize: '0.875rem',
          },
          '& .footer__logo': {
            width: '180px',
          },
          '& .footer__copyright': {
            color: '#C4C4C4',
          },
          '& .footer__links': {
            marginTop: '1rem',
          },
          '& h3': {
            color: 'rgba(153, 153, 153, 1)',
            fontWeight: 500,
          },
          '& .links__group': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& a': {
              margin: '0.5rem 0',
              color: 'inherit',
              textDecoration: 'none',
              paddingBottom: '1rem',
              borderBottom: 'solid 1px #3c3c3c',
              transition: '0.2s',
              '&:hover': {
                color: 'rgba(255,255,255, 0.3)',
              },
            },
            '&.forbole': {
              '& a:last-child': {
                paddingBottom: '0',
                borderBottom: 'none',
              },
            },
            '&.media': {
              display: 'none',
            },
            [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
              '& a': {
                borderBottom: 'none',
                padding: 0,
              },
              '&.media': {
                display: 'grid',
              },
            },
          },
          '& .footer__donate-button': {
            fontWeight: 400,
            padding: '0.2rem 1rem',
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            '&.footer': {
              padding: '3rem 2rem 5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
            '& .footer__links': {
              gridColumn: '2/5',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: 0,
            },
            '& h3': {
              fontSize: '1.125rem',
            },
            '& .footer__social': {
              justifyContent: 'flex-end',
            },
            '& .footer__donate-button': {

            },
          },
        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
