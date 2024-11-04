import React, { useState } from 'react';
import './App.css';
import HocPage from './pages/HocPage';
import FormPage from './pages/FormPage';
//import FormPage2 from './pages/FormPage2'
/* import FormPageMine from './pages/FormPageMine'
import DialogPageMine from './pages/DialogPageMine'
import AntdFormPage from './pages/AntdFormPage'
import AntdFormPage2 from './pages/AntdFormPage2'
 */
// import MyRcFieldForm from './pages/MyRcFieldForm';
// import MyRcFieldForm2 from './pages/MyRcFieldForm2';
// import MyRcForm from './pages/MyRcForm';

/* redux-context */
// import ContextPage from './pages/ContextPage'
// import ReduxPage from './pages/ReduxPage'
// import ReactReduxPage from './pages/ReactReduxPage'
// import ReactReduxHookPage from './pages/ReactReduxHookPage'
import RouteAllPage from './pages/RouteAllPage';
// import RouteChildrenPage from './pages/RouteChildrenPage'
// import RouteRenderPage from './pages/RouteRenderPage'

// import UseReducerPage from "./pages/UseReducerPage";
// import UseContextPage from "./pages/UseContextPage";
// import { MyContext } from "./AppContext";
// import UseRefPage from "./pages/UseRefPage";
// import UseMemoPage from './pages/UseMemoPage'
// import UseCallbackPage from './pages/UseCallbackPage'

function App() {
  // const [num, setNumber] = useState(0);
  return (
    <div className="App">
      {/* 高阶组件 */}
      {/* <HocPage /> */}
      {/* <FormPage /> */}
      {/* <FormPage2 /> */}
      {/* <FormPageMine /> */}
      {/* <DialogPageMine /> */}
      {/* <AntdFormPage /> */}
      {/* <AntdFormPage2 /> */}
      {/* <MyRcFieldForm /> */}
      {/* <MyRcFieldForm2 /> */}
      {/* <MyRcForm /> */}
      {/* <ContextPage />  */}
      {/* <ReduxPage /> */}
      {/* <button onClick={() => {setNumber(num+1)}}>change{num}</button>*/}
      {/* <ReactReduxPage msg="msg"/>  */}
      {/*  <ReactReduxHookPage /> */}
      <RouteAllPage />
      {/* <RouteRenderPage /> */}
      {/* <RouteChildrenPage /> */}
      {/* 比较一下render和component */}
      {/* <UseContextPage /> */}
    </div>
  );
}

export default App;
