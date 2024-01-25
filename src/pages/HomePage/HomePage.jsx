import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CreateEmployeeForm } from '../../components/CreateEmployeeForm/CreateEmployeeForm'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'HRnet - Accueil'
  }, [])

  return (
    <div>
      <div className='title'>
        <h1>HRnet</h1>
      </div>
      <div className='container'>
        <Link to='/employee-list'>View current employee</Link>
        <h2>Create Employee</h2>
        <CreateEmployeeForm />
      </div>
    </div>
  )
}
