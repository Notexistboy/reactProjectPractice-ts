import React from 'react';

// step1. 创建context对象
const RouterContext = React.createContext({ history: [], location: {}, match: {} });

export default RouterContext;
