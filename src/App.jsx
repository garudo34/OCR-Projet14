import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { EmployeeList } from './pages/EmployeeList/EmployeeList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/employee-list' element={<EmployeeList />} />
    </Routes>
  )
}

export default App
