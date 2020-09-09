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
            padding: '1rem',
            color: 'white',
            '& p': {
              marginTop: 0,
              marginBottom: '0.3rem',
            },
          },
          '& .footer__logo': {
            width: '180px',
          },
          '& .footer__copyright': {
            color: '#C4C4C4',
          },
          '& .footer__social': {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            margin: '0.75rem 0',
          },
          '& .footer__links': {
            marginTop: '1rem',
          },
          '& .links__group': {
            display: 'flex',
            flexDirection: 'column',
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
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            '&.footer': {
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
            '& .footer__links': {
              gridColumn: '2/4',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: 0,
            },
            '& .footer__social': {
              justifyContent: 'flex-end',
            },
            '& .footer__donate-button': {
              marginLeft: '1.5rem',
            },
          },
        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
