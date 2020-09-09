import React from 'react';
import Link from 'next/link';
import validator from 'validator';
import { useTranslation } from 'i18n';
import FooterLogo from '@assets/big-dipper-white.svg';
import { SocialMedia } from '@components';
import { Button } from '@material-ui/core';
import { footerLinks } from './utils';
import { useFooterHook } from './hooks';
import { useGetStyles } from './styles';
import { Donate } from './components';

const Footer = () => {
  const { t } = useTranslation(['common']);
  const { classes } = useGetStyles();
  const {
    open,
    handleOpen,
    handleClose,
  } = useFooterHook();

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={`${classes.root} footer`}>
      {/* ============================= */}
      {/* logo */}
      {/* ============================= */}
      <div className="footer__logo--container">
        <FooterLogo className="footer__logo" />
        <p className="footer__slogan">{t('common:slogan')}</p>
        <p className="footer__copyright">
          {t('common:copyright')}
          {' '}
          {year}
        </p>
      </div>
      {/* ============================= */}
      {/* links */}
      {/* ============================= */}
      <div className="footer__links">
        {footerLinks.map((group) => {
          return (
            <div key={group.key} className={`${group.key} links__group`}>
              {
                    group.links.map((x) => {
                      if (validator.isURL(x.url)) {
                        return (
                          <a
                            key={x.url}
                            href={x.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t(`common:${x.key}`)}
                          </a>
                        );
                      }
                      return (
                        <Link key={x.url} href={x.url}>
                          <a>
                            {t(`common:${x.key}`)}
                          </a>
                        </Link>
                      );
                    })
                  }
            </div>
          );
        })}
      </div>
      {/* ============================= */}
      {/* social */}
      {/* ============================= */}
      <div className="footer__social">
        <SocialMedia />
        <div>
          <Donate open={open} handleClose={handleClose} />
          <Button
            className="footer__donate-button"
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            {t('common:donate')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
