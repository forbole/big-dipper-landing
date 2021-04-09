import React from 'react';
import classnames from 'classnames';
import {
  Trans, useTranslation,
} from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';
import getPrivacyDetails from './utils';
import {
  Paragraphy, List,
} from './components';

const PrivacyPolicy = () => {
  const { t } = useTranslation(['privacy_policy']);
  const { classes } = useGetStyles();
  const {
    definitions,
    trackingTechnologiesAndCookies,
    trackingTechnologiesAndCookies2,
    useOfYourPersonalData1, useOfYourPersonalData2,
    otherDetailRequirement, analytics, usuage,
    email,
  } = getPrivacyDetails();

  return (
    <Layout className={classes.root}>
      <div className={classnames(classes.root, 'max-width__parent')} id="about">
        <div className="pp__container max-width__content">
          <Paragraphy title={t('privacyPolicy')} subTitle={null} point={null} paragraph={t('intro')} titleClassName="pp__title" />
          <Paragraphy title={t('interpretationAndDefinitions')} subTitle={t('interpretation')} point={null} paragraph={t('interpretationDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={t('definitions')} point={null} paragraph={t('definitionsIntro')} titleClassName={null} />
          <List list={definitions} />
          <Paragraphy title={t('CollectingAndUsing')} subTitle={t('typesOfDataCollected')} point={t('personalDataType')} paragraph={t('personalDataDetail')} titleClassName={null} />
          <List list={usuage} />
          <Paragraphy title={null} subTitle={null} point={t('usageDataType')} paragraph={t('usageDataDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={null} point={t('trackingTechnologiesAndCookies')} paragraph={t('trackingTechnologiesAndCookiesDetail1')} titleClassName={null} />
          <List list={trackingTechnologiesAndCookies} />
          <Trans
            className={classnames(classes.text)}
            i18nKey={t('trackingTechnologiesAndCookiesDetail2')}
            components={{
              cookiesByTermsLink:
  <a
    href={t('cookiesByTermsLink')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
            }}
          />
          <List list={trackingTechnologiesAndCookies2} />
          <Paragraphy title={null} subTitle={null} point={null} paragraph={t('trackingTechnologiesAndCookiesDetail3')} titleClassName={null} />
          <Paragraphy title={null} subTitle={t('useOfYourPersonalData')} point={null} paragraph={t('useOfYourPersonalDataDetail1')} titleClassName={null} />
          <List list={useOfYourPersonalData1} />
          <Paragraphy title={null} subTitle={null} point={null} paragraph={t('useOfYourPersonalDataDetail2')} titleClassName={null} />
          <List list={useOfYourPersonalData2} />
          <Paragraphy title={null} subTitle={t('retentionOfYourPersonalData')} point={null} paragraph={t('retentionOfYourPersonalDataDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={t('transferOfYourPersonalData')} point={null} paragraph={t('transferOfYourPersonalDataDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={t('disclosureOfYourPersonalData')} point={t('businessTransactions')} paragraph={t('businessTransactionsDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={null} point={t('lawEnforcement')} paragraph={t('lawEnforcementDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={null} point={t('otherLegalRequirements')} paragraph={t('otherLegalRequirementsDetail')} titleClassName={null} />
          <List list={otherDetailRequirement} />
          <Paragraphy title={null} subTitle={null} point={t('securityOfYourPersonalData')} paragraph={t('securityOfYourPersonalDataDetail')} titleClassName={null} />
          <Paragraphy title={t('detailedInformationOnTheProcessingOfYourPersonalData')} subTitle={null} point={null} paragraph={t('detailedInformationOnTheProcessingOfYourPersonalDataDetail')} titleClassName={null} />
          <Paragraphy title={null} subTitle={t('analytics')} point={null} paragraph={t('analyticsDetail')} titleClassName={null} />
          <List list={analytics} />
          <Paragraphy title={t('childrensPrivacy')} subTitle={null} point={null} paragraph={t('childrensPrivacyDetail')} titleClassName={null} />
          <Paragraphy title={t('linksToOtherWebsites')} subTitle={null} point={null} paragraph={t('linksToOtherWebsitesDetail')} titleClassName={null} />
          <Paragraphy title={t('changesToThisPrivacyPolicy')} subTitle={null} point={null} paragraph={t('changesToThisPrivacyPolicyDetail')} titleClassName={null} />
          <Paragraphy title={t('contactUs')} subTitle={null} point={null} paragraph={t('contactUsDetail')} titleClassName={null} />
          <List list={email} />
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
