import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'

class FormPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      psd: '',
    }
    this.submit  =this.submit.bind(this)
  }
  submit(e){
    console.log(e)
    debugger
    //如何获得当前用户名密码
  }
  render() {
    const {name, psd} = this.state
    return (
      <div>
        FormPage
        <Form>
          <Form.Item>
            <Input placeholder=" please input usn" value={name} onChange={(e) => this.setState({name:e.target.value})}/>
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder=" please input psd" value={psd} onChange={(e) => this.setState({psd:e.target.value})}/>
          </Form.Item>
          <Button type="primary" onClick={this.submit}>提交</Button>
        </Form>
      </div>
    )
  }
}

export default FormPage
