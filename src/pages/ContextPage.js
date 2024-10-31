import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import ConsumerPage from './ConsumerPage'
import MultipleConetxtPage from './MultipleConetxtPage'
import UseContextPage from './UseContextPage'
import { ThemeProvider } from '../ThemeContext'
import { UserProvider } from '../UserContext'
import { ContextProvider } from '../AppContext'


export default class ContextPage  extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme:{
        themeColor: '#f00'
      },
      user:{
        name:'foo'
      }
    }
  }
  changeColor = () => {
    this.setState({
      theme: {
        themeColor: '#0ff'
      }
    })
  }
  render() {
    const { theme,user } = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          <button onClick={() => {this.changeColor()}}>123</button>
          <ContextTypePage />
          <MultipleConetxtPage />
          <UserProvider value={user}>
            <MultipleConetxtPage />
            <ConsumerPage />
          </UserProvider>
        </ThemeProvider>
        <ContextProvider value={theme}>
          <UseContextPage />
        </ContextProvider>
      </div>
    )
  }
}

