import React, { Component } from 'react'

import Dialog from '../components/Dialog'
export class DialogPageMine extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDialog: false
    }
  }

  render() {
    const { showDialog }  =this.state
    return (
      <div>
        <h3>DialogPageMine</h3>
        <button onClick={() => {this.setState({showDialog: !showDialog})}}>toggle</button>
        {showDialog && <Dialog hideDialog={this.setState({ showDialog: !showDialog })}>
            <p>123345</p>
          </Dialog>}
        </div>
    )
  }
}

export default DialogPageMine
