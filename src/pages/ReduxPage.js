import React, {Component} from "react";
import store from "../store";

export default class ReduxPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: {
        count: 0
      },
      subscriber:{}
    }
  }
  componentDidMount() {
    /* 订阅 */
    this.subscriber = store.subscribe((params) => {
      const { count } = store.getState();
      this.setState({
        count
      })
    });
  }
  componentWillUnmount() {
    /* 取消订阅 */
    if (this.subscriber){
      this.subscriber();
    }
  }
  add = () => {
    /* dispatch 派发操作 */
    store.dispatch({type: "ADD"});
  };
  minus = () => {
    store.dispatch({type: "MINUS"});
  };
  asyncAdd = () => {
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({type: "ADD"})
      },1000)
    });
  };
  asyncMinus = () => {
    store.dispatch({type: "MINUS"});
  };
  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS",
        payload: 100
      })
    );
  };
  render() {
    console.log("store", store); //
    console.log("getState", store.getState()); //
    const { count } = this.state;
    /* 
      dispatch: ƒ dispatch(action)//默认参数是action
      getState: ƒ getState()
      replaceReducer: ƒ replaceReducer(nextReducer)
      subscribe: ƒ subscribe(listener)
      Symbol(observable): ƒ observable()
    */
    return (
    <div>
      <h3>ReduxPage</h3>
      {/* getState 获取数据 */}
      <p>{count.count}</p>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>

      <button onClick={this.asyncAdd}>asyncAdd</button>
      <button onClick={this.asyncMinus}>asyncMinus</button>

    </div>
    );
  }
}