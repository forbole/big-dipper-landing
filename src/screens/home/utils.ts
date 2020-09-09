import { Network } from '@models';

export const formatNetworkData = (networks:Network[]) => {
  return networks.filter((x) => x.banner)
    .sort((a, b) => ((a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1));
};
