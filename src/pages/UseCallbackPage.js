import React,{useState,useEffect, useCallback, Component, PureComponent} from 'react'

export default function UseMemoPage(props) {
  //定义一个叫 count 的变量
  const [count,setConut] = useState(1);

  const expensive = useCallback(() => {
    let sum = 0
    for(let i=0; i<count; i++){
      sum += i
    }
    return sum
  }, [count])

  const [value, setValue] = useState(1);

  //相当于componentDidMount、componentWillUnmount和componentDidUpdate的集合
  //多个effect共用一个钩子函数
  useEffect(() => {
    document.title = `you clicked ${count} times`
  }, [count])

  return (
    <div>
      <div>UseMemoPage</div>
      <div>{count}</div>   
      <div>expensive{expensive()}</div>   
      <button onClick={() => setConut(count+1)}>{count}</button>
      <input value ={value} onChange={(event) => setValue(event.target.value)}/>
      <Child expensive ={expensive}/ >
    </div>
  )
} 

class Child extends PureComponent {
  render(){
    const { expensive } = this.props
    return(
      <div>
        <h3>Child</h3>
        <button onClick={() => expensive()}>expensive</button>
      </div>
    )
  }
}