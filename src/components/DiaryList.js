import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ControlMenu from './ControlMenu';
import MyButton from './MyButton';
import './DiaryList.css';
import DiaryItem from './DiaryItem';

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
    const navigate = useNavigate();
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


    //React scroll
    const boxRef = useRef(null);
    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);
  
    function logit() {
      setScrollY(boxRef.current.scrollTop);
      if (boxRef.current.scrollTop > 5) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    }
  
    useEffect(() => {
      function watchScroll() {
        boxRef.current.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        boxRef.current.removeEventListener("scroll", logit);
      };
    });

  return (
    <div className='list__container'>

        <div className={ScrollActive ? 'menu__wrapper fixed' : 'menu__wrapper'}>
        {ScrollActive ?
        <>
            <div className='left__col'>
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
            </div>
            <div className='right__col'>
                <MyButton 
                    type={'positive'} 
                    text={'Write new Moo'} 
                    onClick={() => navigate("/new")} 
                />
            </div>
            </>
            : " "
            }
{/* 
            <div className='left__col'>
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
            </div>
            <div className='right__col'>
                <MyButton 
                    type={'positive'} 
                    text={'Write new Moo'} 
                    onClick={() => navigate("/new")} 
                />
            </div> */}
        </div>


        <div className='boxInner' ref={boxRef}>
            {getProcessedDiaryList().map((it) => 
                /* <div key={it.id}>{it.content} {it.emotion}</div>*/
                <DiaryItem key={it.id} {...it} 
                className='boxInner' ref={boxRef}/>
            )}

        </div>
    </div>
  )
};

//props를 읽어오지 못할때 빈배열 반환
DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList