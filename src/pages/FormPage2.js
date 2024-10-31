import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'

const nameRules = {required: true, message: 'please input usn'}
const psdRules = {required: true, message: 'please input psd'}
//antd^3版本中使用的是基于react-component/form rc-form
//antd提供了一个方法 实现双向绑定 //"antd": "^4.4.2",版本中移除
@Form.create({})
class FormPage2 extends Component {
  
  submit =(e) => {
    const { getFieldsValue,validateFields } = this.props.form
    //如何获得当前用户名密码
    /* getFieldDecorator: ƒ()
    getFieldError: ƒ(name)
    getFieldInstance: ƒ()
    getFieldProps: ƒ()
    getFieldValue: ƒ(name)
    getFieldsError: ƒ(names)
    getFieldsValue: ƒ(names) */
    debugger
    const obj = getFieldsValue()
    //表单校验
    validateFields((err,values) => {
      if(err){
        console.log(err)
      }
    })
  }
  render() {
    //通过修饰符创建表单后 this.props.form上提供多种方法
    console.log(this.props)
    const { getFieldDecorator } = this.props.form//通过这个方法传递绑定字段名和对应的组件 会返回一个新的绑定字段的组件
    //当修改输入框中数据时，组件就会进行render，props.form中的数据也会随之更改
    return (
      <div>
        FormPage2
        <Form>
          <Form.Item>
            {/* <Input placeholder=" please input usn" /> */}
            {
              getFieldDecorator("name", {rules:[nameRules]})(
                <Input placeholder="please input usn" />
              )
            }
          </Form.Item>
          <Form.Item>
          {
            getFieldDecorator("psd", {rules:[psdRules]})( 
              <Input type="password" placeholder=" please input psd" />
            )
          }
          </Form.Item>
          <Button type="primary" onClick={this.submit}>提交</Button>
        </Form>
      </div>
    )
  }
}

export default FormPage2
