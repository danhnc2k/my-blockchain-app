import { createContext, useState } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [pendingTransactions, setPendingTransactions] = useState([]);

  const value = {
    pendingTransactions,
    setPendingTransactions,
  };

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>;
};

export default TransactionContext;
