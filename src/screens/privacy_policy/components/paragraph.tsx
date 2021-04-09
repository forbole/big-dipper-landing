import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from '../styles';

interface Props {
  title: string | null,
  subTitle: string | null,
  point: string | null,
  paragraph: string,
<<<<<<< HEAD
  titleClassName: string | null,
=======
>>>>>>> 564c24f9cef825c30694e3376eb156e85091fcbe
}

const Paragraphy = (props: Props) => {
  const { classes } = useGetStyles();
  const {
<<<<<<< HEAD
    title, subTitle, point, paragraph, titleClassName,
=======
    title, subTitle, point, paragraph,
>>>>>>> 564c24f9cef825c30694e3376eb156e85091fcbe
  } = props;
  return (
    <div className={classes.root}>

<<<<<<< HEAD
      <h1 className={titleClassName}>{title}</h1>
=======
      <h1>{title}</h1>
>>>>>>> 564c24f9cef825c30694e3376eb156e85091fcbe
      <h2 className="tc__subTitle">{subTitle}</h2>
      <h3 className="tc__subTitle">{point}</h3>
      <p className={classnames(classes.text)}>
        {paragraph}
      </p>
    </div>
  );
};

export default Paragraphy;
