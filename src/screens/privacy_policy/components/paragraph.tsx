import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from '../styles';

interface Props {
  title: string | null,
  subTitle: string | null,
  point: string | null,
  paragraph: string,
}

const Paragraphy = (props: Props) => {
  const { classes } = useGetStyles();
  const {
    title, subTitle, point, paragraph,
  } = props;
  return (
    <div className={classes.root}>

      <h1>{title}</h1>
      <h2 className="tc__subTitle">{subTitle}</h2>
      <h3 className="tc__subTitle">{point}</h3>
      <p className={classnames(classes.text)}>
        {paragraph}
      </p>
    </div>
  );
};

export default Paragraphy;
