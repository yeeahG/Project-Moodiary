import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import MyButton from './MyButton'
import EmotionItem from './EmotionItem'
import { DiaryDispatchContext } from '../App'
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
    },
    {
      emotion_id: 2,
      emotion_img: process.env.PUBLIC_URL + `/images/emotion2.png`,
      emotion_descript: '나쁨',
    },
    {
      emotion_id: 3,
      emotion_img: process.env.PUBLIC_URL + `/images/emotion3.png`,
      emotion_descript: '그냥저냥',
    },
    {
      emotion_id: 4,
      emotion_img: process.env.PUBLIC_URL + `/images/emotion4.png`,
      emotion_descript: '좋음',
    },
    {
      emotion_id: 5,
      emotion_img: process.env.PUBLIC_URL + `/images/emotion5.png`,
      emotion_descript: '너무 좋음',
    },
]

const DiaryEditor = () => {
    const navigate = useNavigate();

    console.log(getStringDate(new Date()));
    const [date, setDate] = useState(getStringDate(new Date()));
    const [emotion, setEmotion] = useState(3); 
    //그냥저냥 감정을 기본으로 설정
    //emotion을 클릭했을 때 state를 변경하게
    const handleClickEmote = (emotion) => {
      setEmotion(emotion);
    }

    //일기저장
    const [content, setContent] = useState("");
    //내용을 안적으면 저장이 안되게 하는 기능을 위해
    const contentRef = useRef();

    //App.js에서 작성한 onCreate는 DiaryDispatchContext에 저장되어 있어서 호출
    const {onCreate} = useContext(DiaryDispatchContext);

    const handleSubmit = () => {
      if(content.length < 1) {
        contentRef.current.focus();
        return;
      } 
      onCreate(date, content, emotion);
      navigate('/', {replace: true}) //현재의 일기 작성페이지로 못 돌아오게
    }

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
              <div className='input__box emotion__list__wrapper'>
                  {emotionList.map((it) => (
                  // <div key={it.emotion_id}>{it.emotion_descript}</div>
                  <EmotionItem 
                    key={it.emotion_id} {...it} 
                    onClick={handleClickEmote}
                    isSelected={it.emotion_id === emotion}
                  />
                  ))}
              </div>
          </section>

          <section>
            <h4>Today</h4>
            <div className='input__box text__wrapper'>
              <textarea 
                placeholder='What about your day?'
                ref={contentRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </section>

          <section>
            <div className='control__box'>
              <MyButton text={'cancel'} onClick={() => navigate(-1)} />
              <MyButton text={'confirm'} type={'positive'} onClick={handleSubmit} />
            </div>
          </section>

        </div>
  
      </div>
    )
}

export default DiaryEditor