import React from 'react';
import classnames from 'classnames';
import {
  Trans, useTranslation,
} from 'i18n';
import { Layout } from '@components';
import { Grid } from '@material-ui/core';
import { useGetStyles } from './styles';
import getFaqDetails from './utils';

const Faq = () => {
  const { t } = useTranslation(['faq']);
  const { classes } = useGetStyles();
  const faqData = getFaqDetails();
  const [clickedParagraph, setClickedParagraph] = React.useState(0);

  return (
    <Layout className={`${classes.root} home-page__container`} color="grey">

      <div
        className="max-width__parent"
        id="about"
      >

        <div
          className="faq__container max-width__content"
        >

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
          <div
            className={classnames('container')}
          >
            <div>
              <h3>{t('table of content')}</h3>
              <div
                className="sticky_box"
              >
                <div
                  style={{
                    paddingLeft: '0',
                  }}
                >
                  {faqData.map((x, i) => {
                    return (
                      <>
                        <div
                          className="menu_title"
                          role="button"
                          onClick={() => setClickedParagraph(i)}
                          style={{
                            color: i === clickedParagraph ? '#FD3B4C' : 'inherit',
                          }}
                        >
                          {t(x.topic)}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={classnames('paragraph')}>
              {faqData.map((x) => {
                return (
                  <div key={x.topic}>
                    <Grid container spacing={2}>
                      {x.questions.map((question, i) => {
                        return (
                          <Grid
                            key={question.question}
                            item
                            xs={12}
                            style={{
                              display: i === clickedParagraph ? 'block' : 'none',
                            }}
                          >
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
