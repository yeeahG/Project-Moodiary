import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import './App.css';
import MyButton from './components/MyButton';
import Title from './components/Title';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <MyButton 
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
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;