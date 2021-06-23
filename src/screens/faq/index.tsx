import React from 'react';
import classnames from 'classnames';
import {
  Trans, useTranslation,
} from 'i18n';
import { Layout } from '@components';
import { Grid } from '@material-ui/core';
import Scrollspy from 'react-scrollspy';
import StickyBox from 'react-sticky-box';
import { useGetStyles } from './styles';
import getFaqDetails from './utils';

const Faq = () => {
  const { t } = useTranslation(['faq']);
  const { classes } = useGetStyles();
  const faqData = getFaqDetails();

  return (
    <Layout className={`${classes.root} home-page__container`} color="grey">
      <div
        className="max-width__parent"
        id="about"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <StickyBox
          className="sticky_box"
        >
          <Scrollspy>
            {faqData.map((x) => {
              return (
                <>
                  <div className="menu_title"><a href={`#${x.topic}`}>{t(x.topic)}</a></div>
                  {x.questions.map((q) => {
                    return (
                      <div className="menu_subtitle"><a href={`#${q.question}`}>{t(q.question)}</a></div>
                    );
                  })}
                </>
              );
            })}
          </Scrollspy>
        </StickyBox>

        <div
          className="faq__container max-width__content"
        >

          <div>

            <h1 className="faq__title">{t('FAQ')}</h1>

            <p className={classnames('context')}>
              {t('context')}
            &nbsp;
              <a
                className={classnames('mail-link')}
                href="mailto:info@forbole.com"
              >
                {t('email')}
              </a>
            </p>
            <div className={classnames('paragraph')}>
              {faqData.map((x) => {
                return (
                  <div key={x.topic}>
                    <h2 className="topic__title" id={x.topic}>{t(x.topic)}</h2>
                    <Grid container spacing={2}>
                      {x.questions.map((question) => {
                        return (
                          <Grid key={question.question} item xs={12}>
                            <h2 id={question.question} className={classnames('subTitle')}>
                              {t(question.question)}
                            </h2>
                            <p className={classnames('details')}>
                              <Trans
                                i18nKey={t(question.ans)}
                                components={{
                                  youtube:
  <a
    href={t('video')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                                  staking:
  <a
    href={t('here')}
    target="_blank"
    rel="noreferrer"
  >
    link
  </a>,
                                }}
                              />
                              {question.details?.map((details, index) => {
                                return (
                                  <span key={index} className={classnames('details', 'details_container')}>
                                    ●
                                    <span className={classnames('details', 'text')}>{t(details.content)}</span>
                                  </span>
                                );
                              })}
                              {t(question.conclusion)}
                            </p>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Faq;
