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
import PrivateRoute from './components/PrivateRoute';
import AllreadyLoginRoute from './components/AllreadyLoginRoute';
import AllreadyLogin from './pages/AllreadyLogin';

function App() {

  return (
    <Router basename="/">
      <Routes>
        <Route path="/create/user" element={<CreateUser />} />
        <Route path="/login" element={
          <AllreadyLoginRoute>
            <Login />
          </AllreadyLoginRoute>
          
          } />
        <Route path="/test" element={
          <PrivateRoute>
            <Test />
        </PrivateRoute>
        } />
        <Route path="/create/todo" element={
          <PrivateRoute>
            <CreateTodo />
        </PrivateRoute>
        } />
        <Route path="/todo/summary" element={
          <PrivateRoute>
            <TodoIndex />
        </PrivateRoute>
        } />
        <Route path="/todo/:id" element={
          <PrivateRoute>
            <TodoDetail />
        </PrivateRoute>
        } />
        <Route path="/home/test" element={
          <PrivateRoute>
            <HomeTest />
        </PrivateRoute>
        } />
        <Route path="/allready-login" element={
          <PrivateRoute>
            <AllreadyLogin />
        </PrivateRoute>
        } />
      </Routes>
  </Router>
  )
}

export default App
