import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import { FileCopyOutlined } from '@material-ui/icons';
import { useGetStyles } from './styles';
import getDonation from './utils';
import { useDonateHook } from './hooks';

const Donate = () => {
  const { t } = useTranslation(['donate']);
  const { classes } = useGetStyles();
  const donations = getDonation();
  const { handleCopy } = useDonateHook(t);

  return (
    <Layout className={classnames(classes.root)} color="grey">
      <div className="max-width__parent" id="about">
        <div className="donate__container max-width__content">
          <h2 className="donate__title">{t('donation')}</h2>
          <p className={classnames('context')}>
            {t('context')}
          </p>
          <Grid container spacing={2}>
            {donations.map((x) => {
              return (
                <Grid key={x.coin} item xs={12} lg={6}>
                  <Paper className={classnames('card')} elevation={5}>
                    <div className={classnames('container')}>
                      <img src={`/images/icons/${x.coin}.png`} alt="" />
                      <div className={classnames('text-container')}>
                        <h2 className={classnames('subTitle')}>
                          {x.coin}
                        </h2>
                        <span className={classnames('details')} onClick={() => handleCopy(x.address)} role="button">
                          {x.address}
                          <FileCopyOutlined
                            fontSize="small"
                            className="copy-icon icon"
                          />
                        </span>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
