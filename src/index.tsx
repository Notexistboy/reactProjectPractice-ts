import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from './kreact-fiber/react-dom';
// import Component from './kreact-fiber/Component';
import store from './store';
import { Provider } from './kreact-redux';
import App from './App';
import './index.css';

type MyProps = any;
type MyState = { value: string };
class ClassComponent extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="border">
        <p>{this.props?.name}</p>
      </div>
    );
  }
}

function FunctionComponent(props: any) {
  return (
    <div className="border">
      <p>{props.name}</p>
    </div>
  );
}

const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="https://www.kaikeba.com/">开课吧</a>
    <FunctionComponent name="函数组件" />
    {/* <ClassComponent name="类组件" /> */}
  </div>
);

// ReactDOM.render(jsx, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// 文本标签
// 原生标签
// 函数组件
// 类组件
