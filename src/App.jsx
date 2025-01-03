import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useReducer } from 'react'

import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'


import Button from './components/Button'
import Header from './components/Header'
import { getEmotionImg } from './util/get-emoition-image'

const mockData = [
  {
    id : 1,
    createdDate : new Date().getTime(),
    emotionId:1,
    content: "contents of 1"
  },
  {
    id : 2,
    createdDate : new Date().getTime(),
    emotionId : 2,
    content: "contents of 2"
  }
]

function reducer (state, action) {
  return state;
}

function App() {

  const [data, dispatch] = useReducer(reducer, [mockData]);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/diary/:id' element={<Diary />}></Route>
        <Route path='edit/:id' element={<Edit />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
    
  )
}

export default App
