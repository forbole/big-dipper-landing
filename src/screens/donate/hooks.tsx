import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

export const useDonateHook = (t: any) => {
  // ===============================
  // utils
  // ===============================
  const handleCopy = (value: string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };

  return {
    handleCopy,
  };
};
