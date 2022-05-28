import { createContext, useEffect, useState } from 'react';

import * as Dummy from '../utils/dummyData';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [currentWallet, setCurrentWallet] = useState();

  useEffect(() => {
    // generate wallet when starting the application
    setCurrentWallet(Dummy.DUMMY_WALLET);
  }, []);

  const value = {
    currentWallet,
    setCurrentWallet,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export default WalletContext;
