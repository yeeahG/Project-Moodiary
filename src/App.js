import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import './App.css';
import MyButton from './components/MyButton';

const reducer = (state, action) => {
  //state 상태관리 로직들
  let newState = [];

  switch(action.type) {
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      // const newItem = {
      //   ...action.data
      // }
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE':{
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT':{
      newState = state.map((it) => it.id === action.data.id ? {...action.data} : it);
      break;
    }
    default:
      return state;
  }
  return newState;
}

//상태관리를 담을 context
export const DiaryStateContext = React.createContext();
//dispatch 함수들을 담아서 context로 생성
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  //date state를 변화시킬 수 있는 dispatch 함수들
  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({type : "CREATE", data:{
      id: dataId.current, 
      date: new Date(date).getTime(),
      content,
      emotion
    }});
    dataId.current += 1;
  }
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({type: "REMOVE", targetId})
  }
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({type: "EDIT", data:{
      id: targetId,
      date: new Date(date).getTime(),
      content, 
      emotion
    }});
  }

  return (

  <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{
      onCreate, onEdit, onRemove,
    }}>

    <Header 
      // headText={"App"}
      // leftChild={
      //   <MyButton text={"left"} onClick={() => alert("left clicked")} />
      // }
      // rightChild={
      //   <MyButton text={"right"} onClick={() => alert("right clicked")} />
      // }
    />
      
    <BrowserRouter>
      <div className="App">
        {/* <MyButton 
          text={'Button'} 
          onClick={() => alert("버튼 클릭")} 
          type={"positive"} 
        />
        <MyButton 
          text={'Button'} 
          onClick={() => alert("버튼 클릭")} 
          type={"negative"} 
        />
        <MyButton 
          text={'Button'} 
          onClick={() => alert("버튼 클릭")} 
        /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
      </div>
      
    </BrowserRouter>
    </DiaryDispatchContext.Provider> 
  </DiaryStateContext.Provider>

  )
}

export default App;