import { render } from "@testing-library/react"

import React, { Component } from 'react'
//高阶组件 参数需要首字母大写 返回的是一个reactdom对象
export default function FormCreate(Cmp) {
  //接收当前组件作为参数 
  return class extends Component {
    constructor(props){
      super(props)
      this.state = {}
      this.options = {}
    }
    //onchange事件
    handleChange = (e) => {
      //进行setState
      let { name,value } = e.target
      this.setState({[name]:value})
    }
    getFieldDecorator = (field,option) => {
      this.options[field] = option
      //每次都会执行
      return InputCmp => {
        //克隆一份 并添加想要添加的属性 
        //去源码中比较cloneElement和creactElement
        return React.cloneElement(InputCmp, {
          name:field,
          //实现双向数据绑定
          value: this.state[field] || '',
          //onchange事件
          onChange: this.handleChange
        })
      }
    }
    /*  */
    getFieldsValue = () => {
      //return this.state
      return {...this.state}
    }
    /* 获取对应字段值 */
    getFieldValue = (field) => {
      return this.state[field]
    }
    /* 表单校验 */
    validateFields = (callback) => {
      const errors = {}
      const state  =this.state
      for(let key in this.options){
        if(this.state[key] === undefined){
          //没有输入 判断为不合法
          errors[key] = "error"
        }
      }
      if(Object.keys(errors).length === 0){
        callback(undefined, state)
      }else{
        callback(errors, state)
      }
    }
    render(){
      return(
        <div className="border">
        {/* 当前组件如何实现getFieldDecorator 利用到了组件复合的概念 */}
          <Cmp 
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      )
    }
  }
  //返回另一个组件
}