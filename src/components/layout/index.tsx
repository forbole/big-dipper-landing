import React from 'react';
import Logo from '@assets/big-dipper-red.svg';
import Link from 'next/link';
import { useTranslation } from 'i18n';
import { NextSeo } from 'next-seo';
import {
  Languages, Footer,
} from './components';
import { useGetStyles } from './styles';

const Layout = (props:any) => {
  const {
    children,
    className,
  } = props;
  const { t } = useTranslation(['home', 'common']);
  const { classes } = useGetStyles();
  // ============================
  // Meta Tags
  // ============================
  let baseUrl = '';
  let currentPath = '';

  if (typeof window === 'object') {
    baseUrl = window?.location?.origin || '';
    currentPath = window?.location?.href || '';
  }

  const title = 'Big Dipper';
  const type = 'website';
  const description = t('headDescription');
  const imageUrl = `${baseUrl}/images/big-dipper-social-media.png`;

  return (
    <>
      {/* ============================= */}
      {/* SEO */}
      {/* ============================= */}
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type,
          title,
          site_name: 'Big Dipper',
          url: currentPath,
          description,
          images: [
            {
              url: imageUrl,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#da532c',
          },
          {
            name: 'msapplication-config',
            content: `${baseUrl}/images/icons/browserconfig.xml`,
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}
      />
      <div className={`${className} ${classes.root}`}>
        {/* ============================= */}
        {/* nav */}
        {/* ============================= */}
        <div className="nav__container">
          <Link href="/">
            <a>
              <Logo className="nav__logo" />
            </a>
          </Link>
          <Languages />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
