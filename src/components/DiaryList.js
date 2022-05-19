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

const filterOptionList = [
    {value: "all", name: "모두"},
    {value: "good", name: "좋은 Moo"},
    {value: "bad", name: "안좋은 Moo"},
]

const DiaryList = ( {diaryList}) => {
    //Latest,Oldest
    const [sortType, setSortType] = useState('latest');
    //Emotion
    const [filter,setFilter] = useState('all');

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

        //Emotion
        const filterCallBack = (item) => {
            if(filter === 'good') {
                return parseInt(item.emotion) >=3;
            } else {
                return parseInt(item.emotion) < 3;
            }
        } 
        const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallBack(it));


        // const sortedList = copyList.sort(compare);
        const sortedList = filteredList.sort(compare);
        return sortedList;
    }

  return (
    <div>
        <ControlMenu 
            value={sortType} 
            onChange={setSortType}
            optionList={sortOptionList}
        />
        <ControlMenu 
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
        />

        {getProcessedDiaryList().map((it) => 
            <div key={it.id}>{it.content} {it.emotion}</div>
        )}
    </div>
  )
};

//props를 읽어오지 못할때 빈배열 반환
DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList