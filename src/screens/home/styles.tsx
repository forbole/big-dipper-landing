import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          fontSize: '1rem',
          '& .home-page__hero': {
            minHeight: '70vh',
            backgroundColor: '#131316',
            backgroundImage: 'url(\'/images/big-dipper-hero.png\')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '95%',
            backgroundPosition: 'center bottom',
            padding: '1rem',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          },
          '& .hero__title': {
            width: '100%',
            fontSize: '2rem',
            color: 'white',
            fontWeight: 500,
            marginTop: '5.5rem',
            textAlign: 'center',
          },
          '& .about__container, & .networks__container': {
            padding: '2rem 1rem',
          },
          '& .about__title, & .networks__title': {
            fontSize: '1.75rem',
            fontWeight: 400,
            margin: 0,
          },
          '& .about__content': {
            whiteSpace: 'pre-line',
            lineHeight: 2,
            marginTop: '1rem',
          },
          '& .column': {
            maxWidth: '800px',
          },
          '& .fixedratio': {
            width: '100%',
            margin: 0,
            display: 'block',
          },
          '& .networks__items-list': {
            marginTop: '1.5rem',
            display: 'grid',
            gridGap: '1rem',
            gridTemplateRows: 'auto',
          },
          '& .network__item--title': {
            fontSize: '1.125rem',
            fontWeight: 400,
            marginBottom: '0',
          },
          '& .network__item--links': {
            marginTop: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '-0.25rem',
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
            '& .networks__items-list': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            '& .nav__container': {
              padding: '1rem 1.5rem',
            },
            '& .home-page__hero': {
              backgroundSize: 'auto 475px',
            },
            '& .hero__title': {
              marginTop: '5rem',
              fontSize: '2.625rem',
            },
            '& .max-width__parent': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '& .max-width__content': {
              width: '100%',
              maxWidth: theme?.breakpoints?.values?.maxWidth,
            },
            '& .about__title, & .networks__title': {
              fontSize: '2rem',
            },
            '& .about__container, & .networks__container': {
              padding: '3.5rem 1rem',
            },
            '& .networks__items-list': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
          },
        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
