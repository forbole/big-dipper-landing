import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';
import {
  intro, items,
} from './utils';

const TermsAndConditions = () => {
  const { t } = useTranslation(['common']);
  const { classes } = useGetStyles();

  return (
    <Layout className={`${classes.root} home-page__container`}>

      <div className="max-width__parent" id="about">
        <div className="tc__container max-width__content">
          <h2 className="tc__title">{t('termsAndConditions')}</h2>
          <div className={classnames(classes.root, 'paragraph')}>
            <p className={classnames(classes.text, 'intro')}>
              {intro}
            </p>
            {items.map((x, i) => {
              return (
                <div key={i} className={classnames(classes.text, 'container')}>
                  <div className={classnames(classes.text, 'topic__title')}>
                    {i + 1}
                    .
                    <p className={classnames(classes.text, 'text')}>{t(x.topic)}</p>
                  </div>
                  <div>
                    {x.details.map((details, index) => {
                      return (
                        <div key={index} className={classnames(classes.text, 'details_container')}>
                          {index + 1}
                          .
                          <p className={classnames(classes.text, 'text')}>{(details.content)}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
