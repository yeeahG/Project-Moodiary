import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  const diaryList = useContext(DiaryStateContext);
  console.log(diaryList);

  const [originData, setOriginData] = useState();


  //id나 diaryList가 변할때만 꺼내오도록
  useEffect(() => {
    if(diaryList.length >=1 ) {
      const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id))
      console.log(targetDiary);

      //originData에 targetDiary를 저장해서 origindata를 초기화
      //만약 없는 다이어리를 요청한다면 돌려보내는 함수도 있어야함 (else문)
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate('/', {replace: true});
      }
    
    }

  }, [id, diaryList])
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} /> }

    </div>
  )
}

export default Edit