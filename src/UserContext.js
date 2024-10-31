/* 作为公共媒介去实现数据的发布和订阅 */
import React from 'react'
//创建context  
export const UserContext = React.createContext({
name: 'bar'
})

//提供者
export const UserProvider = UserContext.Provider

//消费者
export const UserConsumer = UserContext.Consumer