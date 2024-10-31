import React, {useState, useEffect, useContext} from "react";
import {MyContext} from "../AppContext";

export default function UseContextPage(props) {
  const ctx = useContext(MyContext); // 取到当前context中保存的值
  console.log("ctx", ctx); //sy-log
  return (
    <div style={{ color: ctx.themeColor }}>
      <h3>UseContextPage</h3>
      123
    </div>
  );
}
