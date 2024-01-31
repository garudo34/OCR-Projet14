import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addEmployee } from '../../app/reducers/employeesSlice'
import { states } from '../../data/states'
import { departments } from '../../data/departments'
import Select from 'react-select'

import './CreateEmployeeForm.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Modal } from 'hrnet-modal-library'

/**
 * Form component with form validation on submit
 *
 * @category Components
 * @component
 
 * @returns {React.Component} - The form component
 */

export const CreateEmployeeForm = () => {
  // State to track the input values changes
  const [inputFields, setInputFields] = useState({
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  })

  const [errors, setErrors] = useState({})
  // state to track if the form has been submitted
  const [submitting, setSubmitting] = useState(false)
  // state to handle the modal behaviour
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  /**
   * On form submit with no errors on validation
   */
  const lauchSubmit = async () => {
    try {
      dispatch(
        // action addEmployee with form values as payload
        addEmployee({
          firstname: inputFields.firstname,
          lastname: inputFields.lastname,
          dateOfBirth: new Date(inputFields.dateOfBirth).toLocaleDateString(
            'en-us'
          ),
          startDate: new Date(inputFields.startDate).toLocaleDateString(
            'en-us'
          ),
          street: inputFields.street,
          city: inputFields.city,
          state: inputFields.state.value,
          zipCode: inputFields.zipCode,
          department: inputFields.department.label,
        })
      )
      // empty form values
      setInputFields({
        ...inputFields,
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
      })
      // trigger the modal display
      setIsOpen(true)
    } catch (err) {
      if (!err.status) {
        console.log('No server response', err)
      } else if (err.status === 400) {
        console.log('Missing email or password')
      } else if (err.status === 401) {
        console.log('Unauthorized')
      } else {
        console.log(err.data?.message)
      }
    }
  }

  // inputs change event
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
  }

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateValues(inputFields))
    setSubmitting(true)
  }

  // form validation check
  const validateValues = (inputValues) => {
    let errors = {}

    if (!inputValues.firstname) {
      errors.firstname = 'Enter a firstname'
    }
    if (!inputValues.lastname) {
      errors.lastname = 'Enter a lastname'
    }
    if (!inputValues.dateOfBirth) {
      errors.dateOfBirth = 'Enter a date of birth'
    }
    if (!inputValues.startDate) {
      errors.startDate = 'Enter a start date'
    }
    return errors
  }

  // launch the form submission only when there is no error
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      lauchSubmit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  return (
    <form
      action='#'
      id='create-employee'
      className='form-container'
      onSubmit={handleSubmit}
    >
      <div className='main-form-content'>
        <div className='left-content'>
          <div className='input-wrapper'>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              value={inputFields.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <small className='error'>{errors.firstname}</small>
            )}
          </div>
          <div className='input-wrapper'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              value={inputFields.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <small className='error'>{errors.lastname}</small>
            )}
          </div>

          <div className='input-wrapper'>
            <label htmlFor='dateOfBirth'>Date of Birth</label>
            <DatePicker
              name='dateOfBirth'
              id='dateOfBirth'
              selected={inputFields.dateOfBirth}
              onChange={(date) =>
                setInputFields({ ...inputFields, dateOfBirth: date })
              }
              showMonthDropdown
              showYearDropdown
              dropdownMode='select'
            />
            {errors.dateOfBirth && (
              <small className='error'>{errors.dateOfBirth}</small>
            )}
          </div>
          <div className='input-wrapper'>
            <label htmlFor='startDate'>Start Date</label>
            <DatePicker
              name='startDate'
              id='startDate'
              selected={inputFields.startDate}
              onChange={(date) =>
                setInputFields({ ...inputFields, startDate: date })
              }
              showMonthDropdown
              showYearDropdown
              dropdownMode='select'
            />
            {errors.startDate && (
              <small className='error'>{errors.startDate}</small>
            )}
          </div>
          <div className='input-wrapper'>
            <label htmlFor='department'>Department</label>
            <Select
              name='department'
              inputId='department'
              value={inputFields.department}
              onChange={(department) =>
                setInputFields({ ...inputFields, department: department })
              }
              options={departments}
            />
          </div>
        </div>
        <div className='right-content'>
          <fieldset className='address'>
            <legend>Address</legend>
            <div className='input-wrapper'>
              <label htmlFor='street'>Street</label>
              <input
                type='text'
                name='street'
                id='street'
                value={inputFields.street}
                onChange={handleChange}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                id='city'
                value={inputFields.city}
                onChange={handleChange}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='state'>State</label>
              <Select
                name='state'
                inputId='state'
                value={inputFields.state}
                onChange={(state) =>
                  setInputFields({ ...inputFields, state: state })
                }
                options={states}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='zipCode'>Zip Code</label>
              <input
                type='number'
                name='zipCode'
                id='zipCode'
                value={inputFields.zipCode}
                onChange={handleChange}
              />
            </div>
          </fieldset>
        </div>
      </div>

      <button type='submit' className='sign-in-button'>
        Save
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Employee Created!
      </Modal>
    </form>
  )
}
