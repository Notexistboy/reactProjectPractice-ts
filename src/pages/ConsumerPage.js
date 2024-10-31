import React from 'react'
import {ThemeConsumer} from '../ThemeContext'
import { UserConsumer } from '../UserContext'
function ConsumerPage() {
  return (
    <div>
      <h3>ThemeConsumer</h3>
      <ThemeConsumer>
      {/* 传递的参数是一个函数 context绑定的内容就是ctx参数 */}
      {
        ctx => <div style={{color:ctx.themeColor}}>123
          <UserConsumer>

            {ctx => <div>{ctx.name}</div>}
          </UserConsumer>
        </div>
      }
      </ThemeConsumer>
    </div>
  )
}

export default ConsumerPage
