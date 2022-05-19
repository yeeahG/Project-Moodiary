import React from 'react'
import './Header.css'

const Header = ( {headText, leftChild, rightChild} ) => {
  return (
  <div className='header__container'>
    <div className='head_btn_left'>{leftChild}</div>
    <div className='head_text'>{headText}</div>
    <div className='head_btn_right'>{rightChild}</div>
  </div>
  )
}

export default Header