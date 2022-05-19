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

    const getProcessedDiaryList = () => {
        //Diay리스트들이 지금 {,} 객체형태로 되어있어서
        //비교함수를 짜줘야한다
        const compare = (a,b) => {
            if(sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }

        const copyList = JSON.parse(JSON.stringify(diaryList));
        const sortedList = copyList.sort(compare);
        return sortedList;
    }

  return (
    <div>
        <ControlMenu 
            value={sortType} 
            onChange={setSortType}
            optionList={sortOptionList}
        />
        {getProcessedDiaryList().map((it) => 
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