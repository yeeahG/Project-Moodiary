import React, { useContext, useEffect, useState } from 'react'
import { DiaryStateContext } from '../App'
import DiaryList from '../components/DiaryList'
import Header from '../components/Header'
import MyButton from '../components/MyButton'
import Title from '../components/Title'
import './Home.css'

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  //console.log(curDate);
  
  const headText = `${curDate.getFullYear()} ${curDate.getMonth()+1}`
  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()))
  }
  
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()))
  }


  const diaryList = useContext(DiaryStateContext);
  //일기를 월별로 관리
  const [data,setData] = useState([]);
  //curDate가 변화하는 순간에만 년,월에 data를 뽑아올 것
  useEffect(() => {
    if(diaryList.length >= 1) {
      const firstday = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      //console.log(new Date(firstday));
  
      const lastday = new Date(
        curDate.getFullYear(),
        curDate.getMonth()+1,
        0
      ).getTime();
      //console.log(new Date(lastday));
  
      //firstday와 lasday사이에 작성된 일기들을 추려내면 됨
      setData(diaryList.filter
        ((it)=> firstday <=  it.date && it.date <= lastday)
      );
    }
  }, [diaryList, curDate]) //diaryList를 여기에 전달해주지 않으면 useEffect가 diaryList가 바뀌면 동작을 안함

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Title/>
      
      <div>
        <Header 
          headText={headText}
          leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
          rightChild={<MyButton text={'>'} onClick={increaseMonth}/>}
        />
      </div>


      <div className='home__container'>
        List
        <DiaryList diaryList={data}/>
      </div>

    </>
  )
}

export default Home