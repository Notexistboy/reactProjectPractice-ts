import React, { Component } from 'react'

//HOC:是个函数，接收一个组件，返回一个组件

//Cmp这里是function或class
//两个连续的箭头函数 表示第二个箭头函数作为第一个箭头函数的返回值 实现函数柯里化
/* function Child(props) {
    return <div>Child</div>
}; */
const foo = Cmp => props => {
  console.log('props', props)
    return (
      <div className="border">
        <Cmp {...props} />
      </div>
    )
};
const foo2 = Cmp => props => {
  return (
    <div className="greenBorder">
      <Cmp {...props} />
    </div>
  );
};
//const Foo = foo(Child);//此时Foo就是一个组件 那么可以继续链式调用 const Foo1 = foo(Foo)
//const Foo = foo(foo(Child));//

@foo
class Child extends Component {
  render() {
    return <div>Child</div>
  }
}

class Child1 extends Component {
  render() {
    return <div>Child1</div>
  }
}

const Foo = foo2(foo(Child1));

//如果通过decorators来实现高阶组件 那么对应的组件应该是类组件
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Child name="child"/>
        <Foo name="foo" />
      </div>
    )
  }
}
// export default class HocPage extends Component {
//   render() {
//     return (
//       <div>
//         <h3>HocPage</h3>
//         <Foo name="msg" />
//       </div>
//     );
//   }
// }