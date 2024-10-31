/* 作为公共媒介去实现数据的发布和订阅 */
import React from 'react'
//创建context  参数为默认值
export const ThemeContext = React.createContext({
  themeColor: '#0ff'
})

//提供者
export const ThemeProvider = ThemeContext.Provider

//消费者
export const ThemeConsumer = ThemeContext.Consumer