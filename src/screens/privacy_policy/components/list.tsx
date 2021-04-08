import React from 'react';
import classnames from 'classnames';
import {
  Trans, useTranslation,
} from 'i18n';
import { useGetStyles } from '../styles';

interface Props {
  list: {
    topic: string
  }[],

}

const List = (props: Props) => {
  const { t } = useTranslation(['privacy_policy']);
  const { classes } = useGetStyles();
  const { list } = props;

  return (
    <div>
      {list.map((x, i) => {
        return (
          <div key={i} className={classnames(classes.text)}>
            <div className={classnames(classes.content__container)}>
              ●
              <p className={classnames(classes.text, 'text')}>
                <Trans
                  i18nKey={t(x.topic)}
                  components={{
                    title:
  <span
    className={classnames(classes.text, 'topic__title')}
  />,
                    adobeLink:
  <a
    href={t('adobeLink')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                    web:
  <a
    href={t('link')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                    cookiesByTermsLink:
  <a
    href={t('cookiesByTermsLink')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                    googlePrivacyLink:
  <a
    href={t('googlePrivacyLink')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                    matomaPrivacyLink:
  <a
    href={t('matomaPrivacyLink')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                    email:
  <a
    className={classnames('mail-link')}
    href="mailto:info@forbole.com"
  >
    link
  </a>,
                  }}
                />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
