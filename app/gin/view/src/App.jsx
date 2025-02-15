import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Test from './pages/Test';
import CreateTodo from './pages/CreateTodo';
import TodoIndex from './pages/TodoIndex';
import TodoDetail from './pages/TodoDetail';
import CreateUser from './pages/CreateUser';
import HomeTest from './pages/HomeTest';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path='/create' element={<CreateTodo />} />
        <Route path="/index" element={<TodoIndex />} />
        <Route path="/index/:id" element={<TodoDetail />} />
        <Route path="/create/user" element={<CreateUser />} />
        <Route path="/home/test" element={<HomeTest />} />
      </Routes>
  </Router>
  )
}

export default App
