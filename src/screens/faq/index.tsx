import React from 'react';
import classnames from 'classnames';
import { useGetScreenSizeHook } from '@src/hooks';
import {
  Trans, useTranslation,
} from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';
import getFaqDetails from './utils';

const Faq = () => {
  const {
    isMobile, isTablet,
  } = useGetScreenSizeHook();
  const { t } = useTranslation(['faq']);
  const { classes } = useGetStyles();
  const faqData = getFaqDetails();
  const [topic, setTopic] = React.useState(1);
  let displayData = faqData;

  React.useEffect(() => {
    if (isMobile || isTablet) {
      setTopic(0);
    } else if (topic === 0) {
      setTopic(1);
    }
  }, [isMobile, isTablet]);

  if (topic !== 0) {
    displayData = [faqData[topic - 1]];
  }

  return (
    <Layout className={`${classes.root} faq-page__container`} color="grey">
      <div
        className="max-width__parent"
        id="about"
      >
        <div className="faq__container max-width__content">
          <h1 className="faq__title">{t('FAQ')}</h1>
          <p className={classnames('context')}>
            {t('context')}
            &nbsp;
            <a
              className={classnames('link')}
              href="mailto:info@forbole.com"
            >
              {t('email')}
            </a>
          </p>
          {/* <h3>{t('table of content')}</h3> */}
          <div className={classnames('container')}>
            <div className="table-content__wrapper">
              <div className="sticky_box">
                {faqData.map((x, i) => {
                  return (
                    <h4
                      key={x.topic}
                      role="button"
                      className="menu_title"
                      onClick={() => setTopic(i + 1)}
                      style={{
                        color: i + 1 === topic ? '#FD3B4C' : 'inherit',
                      }}
                    >
                      {t(x.topic)}
                    </h4>
                  );
                })}
              </div>
            </div>

            <div className={classnames('paragraph')}>
              {displayData.map((x) => {
                return (
                  <div key={x.topic}>
                    <h4 id="topic-title">{t(x.topic)}</h4>
                    <div>
                      {x.questions.map((question) => {
                        return (
                          <div key={question.question}>
                            <h2
                              id={question.question}
                              className={classnames('subTitle')}
                            >
                              {t(question.question)}
                            </h2>
                            <p className={classnames('details')}>
                              <Trans
                                i18nKey={t(question.ans)}
                                components={{
                                  youtube: (
                                    <a
                                      className="link"
                                      href={t('video')}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      link
                                    </a>
                                  ),
                                  staking: (
                                    <a
                                      className="link"
                                      href={t('here')}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      link
                                    </a>
                                  ),
                                  boldPoint: (
                                    <span
                                      className={classnames('point')}
                                    />
                                  ),
                                }}

                              />
                            </p>
                            <ul>
                              {question.details?.map((details) => {
                                return (
                                  <li
                                    key={details.content}
                                    className={classnames('details', 'text')}
                                  >
                                    {t(details.content)}
                                  </li>
                                );
                              })}
                            </ul>
                            <p className={classnames('details')}>
                              {t(question.conclusion)}
                            </p>
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

      </div>
    </Layout>
  );
};

export default Faq;
