import DataTable from 'react-data-table-component'
import './TableComponent.css'

export const TableComponent = ({ data, columns }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      striped
      responsive
    />
  )
}
