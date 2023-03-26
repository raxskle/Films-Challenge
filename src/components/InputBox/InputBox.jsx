import React, { useState } from 'react'
import { guessedCorrect } from '../../data/Queues';
import "./InputBox.scss"

export default function InputBox(props) {
  let [isFault, setFault] = useState(false);
  let stopBubble = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  }
  // 在输入框组件内判断猜正确或错误
  // 错误出现提示
  // 正确维护队列

  // 做一个受控组件
  let [guessName, setGuessName] = useState("");
  let keepGuessName = (e) => {
    setFault(false);
    setGuessName(e.target.value.toString());
  }

  let checkIsCorrect = () => {
    if (props.filmName === guessName) {
      // 当猜中了  
      guessedCorrect();
      // 关闭输入框
      props.setShow(false);
    } else {
      setFault(true);
    }
  }

  return (
    <div className='mask' onClick={()=>props.setShow(false)}>
      <div className='inputBox' onClick={stopBubble}>
        {isFault ?<div className='fault shake-horizontal'>猜错了！</div>:<div className='fault'> </div> }
        <input placeholder='输入这部电影的名字吧' value={guessName} onChange={keepGuessName} ></input>
        <button onClick={()=>checkIsCorrect()}>确认</button>
      </div>
    </div>
  )
}
