import propTypes from 'prop-types'
import './FilterComponent.css'

/**
 * FilterComponent
 *
 * @category Components
 * @component
 * @param {function} handleFilterChange function called on input change
 * @param {string} filterText string value to filter
 * @returns {React.Component} - The filter component
 */
const FilterComponent = ({ handleFilterChange, filterText }) => {
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

FilterComponent.propTypes = {
  /** Function that is called on input change */
  handleFilterChange: propTypes.func,
  /** String to filter */
  filterText: propTypes.string,
}

export default FilterComponent
