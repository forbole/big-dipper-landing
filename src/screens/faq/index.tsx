import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { Grid } from '@material-ui/core';
import { useGetStyles } from './styles';
import getFaqDetails from './utils';

const Faq = () => {
  const { t } = useTranslation(['faq']);
  const { classes } = useGetStyles();
  const faqData = getFaqDetails();
  return (
    <Layout className={`${classes.root} home-page__container`}>

      <div className="max-width__parent" id="about">
        <div className="faq__container max-width__content">
          <h2 className="faq__title">{t('FAQ')}</h2>
          <p className={classnames(classes.context, 'context')}>
            {t('context')}
            &nbsp;
            <a
              className={classnames('mail-link')}
              href="mailto:support@forbole.com"
            >
              {t('email')}
            </a>
          </p>
          <div className={classnames(classes.root, 'paragraph')}>
            {faqData.map((x) => {
              return (
                <div key={x.topic}>
                  <h2 className="topic__title">{t(x.topic)}</h2>
                  <Grid container spacing={2}>
                    {x.questions.map((question) => {
                      return (
                        <Grid key={question.question} item xs={12}>
                          <h2 className={classes.subTitle}>
                            {t(question.question)}
                          </h2>
                          <p className={classnames(classes.paragraph, 'details')}>
                            {t(question.ans)}
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
    </Layout>
  );
};

export default Faq;
