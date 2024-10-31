import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class RouteRenderPage extends
  Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>RouteRenderPage</h3>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}>
          click change count {count}
        </button>
        <Router>
          {/* 渲染component的时候会调⽤React.createElement，
          如果使⽤render这种匿名函数的形式，每次都会生成一个新的匿名的函数，
          导致 生成的组件的type总是不相同，这个时候会产生重复的卸载和挂载 */}

          {/* 错误举例例 课下⾃自⼰己尝试下 观察下child的 didMount和willUnmount函数 */}
          {/* <Route component={() => <Child count={count} />} /> */}
          {/* <Route component={Child} /> */}
          {/* <Route component={() => <FunctionChild count={count} />} /> */}

          {/* 下⾯才是正确的示范 */}
          <Route render={() => <Child count={count} />} /> {/* componentDidMount */}
          <Route render={() => <FunctionChild count={count} />} />
          {/* children */}
          {/* <Route children={() => <Child count={count} />} /> */}
          <Route children={() => <FunctionChild count={count} />} />
        </Router>
      </div>
    );
  }
}

//
class Child extends Component {
  componentDidMount() {
    console.log("componentDidMount"); //
  }
  componentWillUnmount() {
    console.log("componentWillUnmount"); //
  }
  render() {
    return <div>child-{this.props.count}</div>;
  }
}

//
function FunctionChild(props) {
  useEffect(() => {
    return () => {
      console.log("WillUnmount"); //
    };
  }, []);
  return <div>child-{props.count}</div>;
}