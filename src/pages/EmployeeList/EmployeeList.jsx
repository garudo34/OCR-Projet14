import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './EmployeeList.css'
import TableComponent from '../../components/TableComponent/TableComponent'
import FilterComponent from '../../components/FilterComponent/FilterComponent'

/**
 * EmployeeList Component
 *
 * @category Components
 * @component
 * @returns {React.Component} - EmployeeList Component
 */
export const EmployeeList = () => {
  // Employees data loaded from store with default values
  const data = useSelector((state) => state?.employees)

  // Table columns structure
  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: 'Date Of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
      sortFunction: (a, b) => {
        return new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
      },
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
      sortFunction: (a, b) => {
        return new Date(b.startDate) - new Date(a.startDate)
      },
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
  ]

  const [filterText, setFilterText] = useState('')

  const handleFilterChange = (e) => {
    setFilterText(e.target.value)
  }

  // Function that return data with filtered text
  const filteredData = data.filter(
    (item) =>
      (item.firstname &&
        item.firstname.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastname &&
        item.lastname.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city &&
        item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth &&
        item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate &&
        item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state &&
        item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.department &&
        item.department.toLowerCase().includes(filterText.toLowerCase()))
  )

  useEffect(() => {
    document.title = 'HRnet - Current Employees'
  }, [])

  return (
    <div id='employee-div' className='container'>
      <h1>Current Employees</h1>
      <div className='table-container'>
        <FilterComponent
          handleFilterChange={handleFilterChange}
          filterText={filterText}
        />
        {data && <TableComponent data={filteredData} columns={columns} />}
      </div>

      <Link to='/'>Home</Link>
    </div>
  )
}
