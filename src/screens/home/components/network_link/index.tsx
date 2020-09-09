import React from 'react';
import { Link } from '@src/models/network';
import { useGetStyles } from './styles';

const NetworkLink = (props: {
  network: Link;
  className: string;
}) => {
  const {
    network, className,
  } = props;
  const { classes } = useGetStyles();
  return (
    <a
      href={network.url}
      target="_blank"
      rel="noreferrer"
      className={`${className} ${classes.root} network__item--link`}
    >
      {network.chainId}
    </a>
  );
};

export default NetworkLink;
