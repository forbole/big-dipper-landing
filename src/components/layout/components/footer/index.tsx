import React from 'react';
import Link from 'next/link';
import validator from 'validator';
import { useTranslation } from 'i18n';
import FooterLogo from '@assets/big-dipper-white.svg';
import { SocialMedia } from '@components';
import { footerLinks } from './utils';
import { useGetStyles } from './styles';

const Footer = () => {
  const { t } = useTranslation(['common']);
  const { classes } = useGetStyles();

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
              <h3>{t(`common:${group.key}`)}</h3>
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
        {/* ============================= */}
        {/* social */}
        {/* ============================= */}
        <div className="footer__social">
          <h3>{t('common:community')}</h3>
          <SocialMedia />
          <div>
            <p className="footer__donate--excerpt">{t('common:donateExcerpt')}</p>
            <Link key="donate" href="/donate">
              <a className="footer__donate-button">
                {t('common:donate')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
