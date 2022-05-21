import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import MyButton from './MyButton'
import './DiaryEditor.css'

//calender에 오늘날짜 고정
const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const emotionList = [
    {
        emotion_id: 1,
        emotion_img: process.env.PUBLIC_URL + `/images/emotion1.png`,
        emotion_descript: '완전 나쁨',
    },    {
        emotion_id: 2,
        emotion_img: process.env.PUBLIC_URL + `/images/emotion2.png`,
        emotion_descript: '나쁨',
    },    {
        emotion_id: 3,
        emotion_img: process.env.PUBLIC_URL + `/images/emotion3.png`,
        emotion_descript: '그냥저냥',
    },    {
        emotion_id: 4,
        emotion_img: process.env.PUBLIC_URL + `/images/emotion4.png`,
        emotion_descript: '좋음',
    },    {
        emotion_id: 5,
        emotion_img: process.env.PUBLIC_URL + `/images/emotion5.png`,
        emotion_descript: '너무 좋음',
    },
]

const DiaryEditor = () => {
    const navigate = useNavigate();

    console.log(getStringDate(new Date()));
    const [date, setDate] = useState(getStringDate(new Date()));
  
    return (
      <div className='editor__container'>
        <Header 
          headText={'Write New Moo'}
          leftChild={<MyButton text={'<'} onClick={() => navigate(-1)}/>}
          rightChild={<MyButton text={'>'} onClick={() => navigate(-1)}/>}
        />
        
        <div>
            
          <section>
            <h4>오늘은 언제인가요?</h4>
            <div className='input__box'>
              <input
                className='input__date'
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                type='date' 
              />
            </div>
          </section>

          <section>
              <h4>Today Moo</h4>
              <div className='input__box__emotion__list__wrapper'>
                  {emotionList.map((it) => (
                  <div key={it.emotion_id}>{it.emotion_descript}</div>
                  ))}
              </div>
          </section>
        </div>
  
      </div>
    )
}

export default DiaryEditor