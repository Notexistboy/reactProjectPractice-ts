import React, { Component } from 'react'
import Form, { Field } from '../components/my-rc-field-form/'
import Input from '../components/Input'

const nameRules = {required: true, message: 'please input usn'}
const psdRules = {required: true, message: 'please input psd'}

// class MyRcFieldForm extends Component {

//   formRef = React.createRef()

//   componentDidMount() {
//     //实现初始化
//     console.log(this.formRef, 'formRef')
//     // this.formRef.current.setFieldValue({name:"default"})
//   }
//   onFinish = (e) => {
//     debugger
//   }
//   onFinishFailed = (e) => {
//     debugger;
//   }
//   render() {
//     return (
//       <div>
//         <h3>MyRcFieldForm</h3>
//         <Form
//           ref={this.formRef}
//           onFinish={this.onFinish}
//           onFinishFailed={this.onFinishFailed}>
//           <Field rules={[nameRules]} label="姓名" name="name">
//             <Input placeholder=" please input usn" />
//           </Field>
//           <Field rules={[psdRules]} label="密码" name="psd">
//             <Input type="password" placeholder=" please input psd" />
//           </Field>
//           <button type="primary" onClick={this.submit}>提交</button>

//           <button type="defailt" onClick={this.onReset}>重置</button>
//         </Form>
//       </div>
//     )
//   }
// }
// export default MyRcFieldForm
export default class MyRCFieldForm extends Component {
  formRef = React.createRef();
  componentDidMount() {
    this.formRef.current.setFieldValue({ username: "default" });
  }

  onFinish = val => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };
  render() {
    return (
      <div>
        <h3>MyRCFieldForm</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}>
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="Username" />
          </Field>
          <Field name="password" rules={[psdRules]}>
            <Input placeholder="Password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
