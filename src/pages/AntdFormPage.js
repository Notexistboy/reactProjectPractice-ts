import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item
const nameRules = {required: true, message: 'please input usn'}
const psdRules = {required: true, message: 'please input psd'}

class AntdFormPage extends Component {
  //用于创建refs
  formRef = React.createRef();

  componentDidMount() {
    //实现初始化
    this.formRef.current.setFieldValue({name:"default"})
  }
  
  onReset = () => {
    this.formRef.current.resetField()
  }
  onFinish = (e) => {
    debugger
  }
  onFinishFailed = (e) => {
    debugger
    /* errorFields: Array(1)
    {errors: ["please input psd"]
    name: ["psd"]}
    outOfDate: false
    values: {name: "default", psd: undefined} */
  }
  render() {
    console.log("antdFormPage", this.formRef.current)
    //改善了输入框一直输入 就会不断render的情况 提前将form表单存入 formStore中 当发生改变时 只更新对应的field 
    return (
      <div>
        <h3>AntdFormPage</h3>
        <Form
        ref={this.formRef}
        onReset={this.onReset}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}>
          <FormItem rules={[nameRules]} label="姓名" name="name">
            <Input placeholder=" please input usn" onChange={(e) => this.setState({name:e.target.value})}/>
          </FormItem>
          <FormItem rules={[psdRules]} label="密码" name="psd">
            <Input type="password" placeholder=" please input psd" onChange={(e) => this.setState({psd:e.target.value})}/>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" onClick={this.submit}>提交</Button>
          </FormItem>
          <FormItem>
            <Button type="defailt" htmlType="reset" onClick={this.onReset}>提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default AntdFormPage
