import { formatMiddleEllipse } from '@src/utils';
import { useGetScreenSizeHook } from '@src/hooks';

const getDonation = () => {
  const { windowSize } = useGetScreenSizeHook();
  const formatAddress = (address:string) => {
    if (windowSize.width < 480) {
      return (formatMiddleEllipse(address, {
        beginning: 5,
        ending: 5,
      })
      );
    }
    if (windowSize.width < 700) {
      return (formatMiddleEllipse(address, {
        beginning: 15,
        ending: 15,
      })
      );
    }
    return address;
  };
  const donation = [
    {
      coin: 'ATOM',
      address: formatAddress('cosmos1n67vdlaejpj3uzswr9qapeg76zlkusj5k875ma'),
      image: '',
    },
    {
      coin: 'ETH',
      address: formatAddress('0x8CAb9F3fC6bBBD819050365627FC6B79d0ea73e6'),
      image: '',
    },
    {
      coin: 'BTC',
      address: formatAddress('bc1qye4k27zsn5nehzded6jwsvzg8qd6kgvxyhckts'),
      image: '',
    },
  ];

  return donation;
};

export default getDonation;
