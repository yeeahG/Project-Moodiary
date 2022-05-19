import React, { useState } from 'react'
import Header from '../components/Header'
import MyButton from '../components/MyButton'
import Title from '../components/Title'
import './Home.css'

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);
  
  const headText = `${curDate.getFullYear()} ${curDate.getMonth()+1}`
  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()))
  }

  return (
    <>
    <div>
      <Header 
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={() => {}}/>}
        rightChild={<MyButton text={'>'} onClick={increaseMonth}/>}
      />
    </div>
      <Title/>
      <div className='home__container'>
        List
        
      </div>

    </>
  )
}

export default Home