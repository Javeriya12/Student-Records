
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Component from './pages/component';
import RecordStuData from './RecordData/RecordStuData';
import RecordStuList from './RecordList/RecordStuList';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Component/>}/>
     <Route path='/Record-data' element={<RecordStuData/>}/>
     <Route path='/Record-list' element={<RecordStuList/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
