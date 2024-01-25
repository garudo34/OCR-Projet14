import DataTable from 'react-data-table-component'
import './TableComponent.css'

const customStyles = {
  rows: {
    style: {
      minHeight: '50px', // override the row height
      fontSize: '16px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
}

export const TableComponent = ({ data, columns }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      striped
      responsive
      customStyles={customStyles}
    />
  )
}
