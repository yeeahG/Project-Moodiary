import React from 'react'
import './MyButton.css'

const MyButton = ( {text, type, onClick} ) => {
  //만약 type에 feufawfew같은 의미없는 class명이 되면 강제로 default로 지정
  const btnType = ['positive', 'negative'].includes(type) ? type:'default';
  return (
        <button 
          className={["MyButton", `MyButton_${type}`].join(" ")} 
          onClick={onClick}>
            {text}
        </button>

  )
}
/* Type prrop을 전달하지 않으면 default를 전달했다고 하기 */
MyButton.defaultProps = {
    type : "default",
}

export default MyButton