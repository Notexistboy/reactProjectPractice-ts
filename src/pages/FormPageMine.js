import React, { Component } from 'react'
import FormCreate from '../components/FormCreate'

const nameRules = {required: true, message: 'please input usn'}
const psdRules = {required: true, message: 'please input psd'}

@FormCreate
class FormPageMine extends Component {
  componentDidMount(){

  }
  submit = (e) => {
    const { getFieldsValue,validateFields,getFieldValue } = this.props
    validateFields((err,values) => {
      debugger
      if(err){
        debugger
        console.log(err)
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props
    console.log(this.props)
    return (
      <div>
        <h3>FormPageMine</h3>
        {getFieldDecorator("name",{rules:[nameRules]})(
          <input type="text" placeholder="please input usn"/>
        )}
        {/* <input type="text" placeholder="please input usn"/> */}
        {getFieldDecorator("psd",{rules:[psdRules]})(
          <input type="password" placeholder="please input psd"/>
        )}
        {/* <input type="password" placeholder="please input psd"/> */}
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}

export default FormPageMine
