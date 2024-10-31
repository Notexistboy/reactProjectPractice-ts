import React, { Component } from 'react'
import {ThemeConsumer} from '../ThemeContext'
import {UserConsumer} from '../UserContext'
export class MultipleConetxtPage extends Component {
  render() {
    return (
      <div>
        <h3>MultipleConetxtPage</h3>
        <ThemeConsumer>
        {
          theme =>  <UserConsumer>{user => <div style={{color:theme.themeColor}}>{user.name}</div>}</UserConsumer>
        }
        </ThemeConsumer>
      </div>
    )
  }
}

export default MultipleConetxtPage
