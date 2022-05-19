import React, { useState } from 'react'
import './Header.css'
import MyButton from './MyButton';

const Header = ({headText, leftChild, rightChild}) => {
  /*
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);
  
  const headText = `${curDate.getFullYear()} ${curDate.getMonth()+1}`

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()))
  }

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()))
  }
  */
 console.log(leftChild);


  return (
  <div className='header__container'>
    {/*
    <MyButton text={'<'} onClick={decreaseMonth}/>
    {headText} 
    <MyButton text={'>'} onClick={increaseMonth}/>
  */}
  {leftChild}
  {headText}
  {rightChild}
  </div>
  )
}

// const Header = ( {headText, leftChild, rightChild} ) => {
//   return (
//   <div className='header__container'>
//     <div className='head_btn_left'>{leftChild}</div>
//     <div className='head_text'>{headText}</div>
//     <div className='head_btn_right'>{rightChild}</div>
//   </div>
//   )
// }

export default Header