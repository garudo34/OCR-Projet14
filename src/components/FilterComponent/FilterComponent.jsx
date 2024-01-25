import './FilterComponent.css'
export const FilterComponent = ({ handleFilterChange, filterText }) => {
  return (
    <div className='filter-component'>
      <label>
        Search:
        <input
          type='text'
          name='filter'
          placeholder='Filter By Name'
          aria-label='Search Input'
          value={filterText}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  )
}
