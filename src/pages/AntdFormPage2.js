import React, { Component,useEffect } from 'react'
import { Form, Input, Button } from 'antd'
//基于rc-field-form
const FormItem = Form.Item
const nameRules = {required: true, message: 'please input usn'}
const psdRules = {required: true, message: 'please input psd'}

export default function AntdFormPage2(props) {
  //当是函数组件时，使用的是useForm 类似于hook 所以只能用在function组件中
  const [form] = Form.useForm();

  const submit = (e) => {
    //form.resetField()
  };
  const onReset = () => {
    form.resetField()
  };
  const onFinish = (e) => {
    debugger
  };
  const onFinishFailed = (e) => {
    debugger
    /* errorFields: Array(1)
    {errors: ["please input psd"]
    name: ["psd"]}
    outOfDate: false
    values: {name: "default", psd: undefined} */
  };
  useEffect(() => {
    form.setFieldValue({name:"default"})
  }, []);
  return (
    <div>
      <h3>AntdFormPage</h3>
      <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
        <FormItem rules={[nameRules]} label="姓名" name="name">
          <Input placeholder=" please input usn" onChange={(e) => this.setState({name:e.target.value})}/>
        </FormItem>
        <FormItem rules={[psdRules]} label="密码" name="psd">
          <Input type="password" placeholder=" please input psd" onChange={(e) => this.setState({psd:e.target.value})}/>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" onClick={submit}>提交</Button>
        </FormItem>
        <FormItem>
          <Button type="defailt" htmlType="reset" onClick={onReset}>提交</Button>
        </FormItem>
      </Form>
    </div>
  )
}

//export default AntdFormPage2
