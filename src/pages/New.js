import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DiaryEditor from '../components/DiaryEditor'
import Header from '../components/Header'
import MyButton from '../components/MyButton'

//calender에 오늘날짜 고정
const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const New = () => {
  // const navigate = useNavigate();

  // console.log(getStringDate(new Date()));
  // const [date, setDate] = useState(getStringDate(new Date()));

  return (
    <div>
      <DiaryEditor />
    </div>
  //   <div>
  //     <Header 
  //       headText={'Write New Moo'}
  //       leftChild={<MyButton text={'<'} onClick={() => navigate(-1)}/>}
  //     />
      
  //     <div>
  //       <section>
  //         <h4>오늘은 언제인가요?</h4>
  //         <div className='input__box'>
  //           <input
  //             className='input__date'
  //             value={date} 
  //             onChange={(e) => setDate(e.target.value)}
  //             type='date' 
  //           />
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  )
}

export default New