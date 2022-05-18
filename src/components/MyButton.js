import React from 'react'
import './MyButton.css'

const MyButton = ( {text, type, onClick} ) => {
  return (
    <div>
        <button className={["MyButton", `MyButton_${type}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    </div>
  )
}
/* Type prrop을 전달하지 않으면 default를 전달했다고 하기 */
MyButton.defaultProps = {
    type : "default",
}

export default MyButton