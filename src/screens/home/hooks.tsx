import {
  useEffect, useState,
} from 'react';
import axios from 'axios';
import { Network } from '@models';
import { formatNetworkData } from './utils';

export const useHomeHook = () => {
  const NETWORK_LIST_API = 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/bd-networks.json';

  const [networks, setNetworks] = useState<Network[]>([]);

  useEffect(() => {
    const getNetworkList = async () => {
      let data = [];
      try {
        const results = await axios.get(NETWORK_LIST_API);
        data = results?.data ?? [];
      } catch (error) {
        console.error(error);
      }
      const formattedData = data
        .map((x) => Network.fromJson(x));
      setNetworks(formattedData);
    };
    getNetworkList();
  }, []);

  return {
    networks: formatNetworkData(networks),
  };
};
