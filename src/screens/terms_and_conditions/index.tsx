import React from 'react';
import classnames from 'classnames';
import {
  Trans, useTranslation,
} from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';
import getTnCDetails from './utils';

const TermsAndConditions = () => {
  const { t } = useTranslation(['t&c']);
  const { classes } = useGetStyles();
  const items = getTnCDetails();

  return (
    <Layout className={`${classes.root} home-page__container`} color="grey">
      <div className="max-width__parent" id="about">
        <div className="tc__container max-width__content">
          <h1 className="tc__title">{t('termsAndConditions')}</h1>
          <div className={classnames(classes.root, 'paragraph')}>
            <p className={classnames(classes.text, 'detail')}>
              {t('intro')}
            </p>
            <h1 className="tc__subTitle">{t('interpretationAndDefinitions')}</h1>
            <h2 className="tc__subTitle">{t('interpretation')}</h2>
            <p className={classnames(classes.text, 'detail')}>
              {t('interpretationDetail')}
            </p>
            <h2 className="tc__subTitle">{t('definitions')}</h2>
            <p className={classnames(classes.text, 'detail')}>
              {t('definitionsIntro')}
            </p>
            {items.map((x, i) => {
              return (
                <div key={i} className={classnames(classes.text, 'container')}>
                  <p className={classnames(classes.text, 'content__container')}>
                    ●
                    <span className={classnames(classes.text, 'text')}>
                      <Trans
                        i18nKey={t(x.topic)}
                        components={{
                          title:
  <span
    className={classnames(classes.text, 'topic__title')}
  >
    title
  </span>,
                          web:
  <a
    href={t('link')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                        }}
                      />
                    </span>
                  </p>
                </div>
              );
            })}
            <h1 className="tc__subTitle">{t('Acknowledgment')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('acknowleagementDetail')}
            </p>
            <h1 className="tc__subTitle">{t('intellectualProperty')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('intellectualPropertyDetail')}
            </p>
            <h1 className="tc__subTitle">{t('yourFeedbackToUs')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('yourFeedbackToUsDetail')}
            </p>
            <h1 className="tc__subTitle">{t('linksToOtherWebsites')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('linksToOtherWebsitesDetail')}
            </p>
            <h1 className="tc__subTitle">{t('termination')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('terminationDetail')}
            </p>
            <h1 className="tc__subTitle">{t('limitationOfLiability')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('limitationOfLiabilityDetail')}
            </p>
            <h1 className="tc__subTitle">{t('aS_ISandAS_AVAILABLEDisclaimer')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('aS_ISandAS_AVAILABLEDisclaimerDetail')}
            </p>
            <h1 className="tc__subTitle">{t('governingLaw')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('governingLawDetail')}
            </p>
            <h1 className="tc__subTitle">{t('disputesResolution')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('disputesResolutionDetail')}
            </p>
            <h1 className="tc__subTitle">{t('forEUUsers')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('forEUUsersDetail')}
            </p>
            <h1 className="tc__subTitle">{t('USLegalCompliance')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('USLegalComplianceDetail')}
            </p>
            <h1 className="tc__subTitle">{t('severabilityAndWaiver')}</h1>
            <h2 className="tc__subTitle">{t('severability')}</h2>
            <p className={classnames(classes.text, 'detail')}>
              {t('severabilityDetail')}
            </p>
            <h2 className="tc__subTitle">{t('waiver')}</h2>
            <p className={classnames(classes.text, 'detail')}>
              {t('waiverDetail')}
            </p>
            <h1 className="tc__subTitle">{t('translationInterpretation')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('translationInterpretationDetail')}
            </p>
            <h1 className="tc__subTitle">{t('changesToTnC')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('changesToTnCDetail')}
            </p>
            <h1 className="tc__subTitle">{t('contactUs')}</h1>
            <p className={classnames(classes.text, 'detail')}>
              {t('contactUsDetail')}
              <span className={classnames(classes.text, 'content__container', 'mail-link')}>
                ●
                {' '}
                {t('byEmail')}
                &nbsp;
                <a
                  className={classnames('mail-link')}
                  href="mailto:info@forbole.com"
                >
                  {t('email')}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
