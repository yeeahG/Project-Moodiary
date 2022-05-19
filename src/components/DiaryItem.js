import React from 'react'
import { useNavigate } from 'react-router-dom';
import './DiaryItem.css';
import MyButton from './MyButton';

const DiaryItem = ( {id, emotion, content, date}) => {
    const navigate = useNavigate();

    const strDate = new Date(parseInt(date)).toLocaleDateString();

    //일기 상세페이지로 이동
    const goDetail = () => {
        navigate(`/diary/${id}`)
    }

    //일기 수정페이지로 이동
    const goEdit = () => {
        navigate(`/edit/${id}`)
    }

  return (
    <div className='item__container'>
        <div onClick={goDetail}
            className={['emotion__img__wrapper', `emotion__img__wrapper_${emotion}`].join(" ")}
        >
            <img src={process.env.PUBLIC_URL + `images/emotion${emotion}.png`} />
        </div>

        {/* {content} {emotion}*/}
        <div onClick={goDetail} className='info__wrapper'>
            <div className='diary__date'>{strDate}</div>
            <div className='diary__content__preview'>{content.slice(0.25)}</div>
        </div>

        <div className='btn__wrapper'>
            <MyButton onClick={goEdit} text={'edit'} />
        </div>

    </div>
  )
}

export default DiaryItem