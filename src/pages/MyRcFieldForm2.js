import React, { Component,useEffect } from 'react'
//基于rc-field-form
//import Form, {Field} from 'rc-field-form'
// import Form, { Field } from '../components/my-rc-field-form/'
import Form, { Field } from '../components/my-rc-field-form/'
import Input from '../components/Input'

const nameRules = {required: true, message: 'please input usn'}
const psdRules = {required: true, message: 'please input psd'}

// export default function AntdFormPage2(props) {
//   //当是函数组件时，使用的是useForm 类似于hook 所以只能用在function组件中
//   const [form] = Form.useForm();//调用useForm时 没有传任何参数 凡是form中可以能用到参数

//   const submit = (e) => {
//     //form.resetField()
//   };
//   const onReset = () => {
//     form.resetField()
//   };
//   const onFinish = (e) => {
//     debugger
//   };
//   const onFinishFailed = (e) => {
//     debugger
//     /* errorFields: Array(1)
//     {errors: ["please input psd"]
//     name: ["psd"]}
//     outOfDate: false
//     values: {name: "default", psd: undefined} */
//   };
//   useEffect(() => {
//     form.setFieldValue({username: 'default'});
//   }, []);
//   return (
//     <div>
//       <h3>MyRcFieldForm</h3>
//       <Form
//         form={form}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}>
//         <Field rules={[nameRules]} label="姓名" name="username">
//           <Input placeholder=" please input usn"/>
//         </Field>
//         <Field rules={[psdRules]} label="密码" name="psd">
//           <Input type="password" placeholder=" please input psd"/>
//         </Field>
//         <Field>
//           <button type="primary" onClick={submit}>提交</button>
//         </Field>
//         <Field>
//           <button type="defailt" onClick={onReset}>重置</button>
//         </Field>
//       </Form>
//     </div>
//   )
// }


export default function MyRCFieldForm(props) {
  const [form] = Form.useForm();

  const onFinish = val => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };

  // 函数组件初次渲染之后执行，类似componentDidMount
  useEffect(() => {
    console.log("form", form); //sy-log
    form.setFieldValue({ username: "default" });
  }, []);

  return (
    <div>
      <h3>MyRCFieldForm1</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" rules={[nameRules]}>
          <Input placeholder="input UR Username" />
        </Field>
        <Field name="password" rules={[psdRules]}>
          <Input placeholder="input UR Password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}
