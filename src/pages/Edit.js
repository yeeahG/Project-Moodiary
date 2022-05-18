import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Edit = () => {
    //query string 사용
    const [searchParams, setSearchParams] = useSearchParams();

    //id=10으로 query를 꺼냈으니까
    //http://localhost:3000/edit?id=10
    const id = searchParams.get('id');
    console.log(id);
    //setSearchParams는 searchParams를 바꿀 수 있다는 얘기

    const navigate = useNavigate();

  return (
    <div>
        Edit
        <br/>
        {/*id=10을 who=yeri으로 바꿔라*/}
        <button onClick={() => setSearchParams({who:'yeri'})}>Query String</button>

        {/*Page Moving : Home으로 이동시키게 하고 싶음*/}
        <button onClick={()=>{
            navigate('/home')
        }}>HOME</button>
        <button onClick={() => {
            navigate(-1)
        }}>Back</button>
    </div>
  )
}

export default Edit