import React,{useState,useEffect,useMemo} from 'react'

export default function UseMemoPage(props) {
  //定义一个叫 count 的变量
  const [count,setConut] = useState(1);
  const [value, setValue] = useState(1);

  /* const expensive = () => {
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  } */
    const expensive = useMemo(() => {
        let sum = 0
        for (let i = 0; i < count; i++) {
          sum += i
        }
        return sum
    }, [count])// useCallback(fn, deps) 相当于 useMemo(() =>fn, deps)。 仅会在某个依赖项改变时才重新计算

  //相当于componentDidMount、componentWillUnmount和componentDidUpdate的集合
  //多个effect共用一个钩子函数
  useEffect(() => {
    document.title = `you clicked ${count} times`
  }, [count])

  return (
    <div>
      <div>UseMemoPage</div>
      <div>{count}</div>   
      <div>expensive{expensive}</div>   
      <button onClick={() => setConut(count+1)}>{count}</button>
      <input value ={value} onChange={(event) => setValue(event.target.value)}/>
    </div>
  )
} 