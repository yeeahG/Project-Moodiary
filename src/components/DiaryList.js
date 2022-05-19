import React, { useState } from 'react'
import ControlMenu from './ControlMenu';

//Diary를 정렬
/*
const ControlMenu = ( {value, onChange, optionList} ) => {
    return 
    (<select></select>)
}*/
const sortOptionList = [
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "오래된 순"},
]

const DiaryList = ( {diaryList}) => {
    const [sortType, setSortType] = useState('latest');

  return (
    <div>
        <ControlMenu 
            value={sortType} 
            onChange={setSortType}
            optionList={sortOptionList}
        />
        {diaryList.map((it) => 
            <div key={it.id}>{it.content}</div>
        )}
    </div>
  )
};

//props를 읽어오지 못할때 빈배열 반환
DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList