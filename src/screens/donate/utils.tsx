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
      address: formatAddress('xec3AaC5023E0C9E2a76A223E4e312f275c76Cd77'),
      image: '',
    },
    {
      coin: 'BTC',
      address: formatAddress('1HrTuvS83VoUVA79wTifko69ziWTjEXzQS'),
      image: '',
    },
  ];

  return donation;
};

export default getDonation;
