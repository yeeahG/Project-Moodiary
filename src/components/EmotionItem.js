import React from 'react'
import './EmotionItem.css'

const EmotionItem = ( 
    {emotion_id, emotion_img, emotion_descript, onClick, isSelected} 
    ) => {
  return (
    <div 
        //click이 되었을 때 emotion id를 받아서 상위page인 Editor로 전송이되어 Handler가 작동
        onClick={() => onClick(emotion_id)}
        className={
            ['emotion_item_container', 
                isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`
            ].join(" ")}
    >
        <img src={emotion_img}/>
        <span>{emotion_descript}</span>
    </div>
  )
}

export default EmotionItem