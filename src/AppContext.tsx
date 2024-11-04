import React from 'react';

export const MyContext = React.createContext({
  themeColor: '#0ff',
});
export const ContextProvider = MyContext.Provider;
