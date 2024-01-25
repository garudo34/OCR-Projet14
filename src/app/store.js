import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { employeesSlice } from './reducers/employeesSlice'

let state = {
  employees: [
    {
      firstname: 'Ashley',
      lastname: 'Sharpe',
      dateOfBirth: '11/25/1961',
      startDate: '12/02/2016',
      street: '6 Pierrepont Place',
      city: 'Clarktown',
      state: 'PR',
      zipCode: 6101,
      department: 'marketing',
    },
    {
      firstname: 'Baxter',
      lastname: 'Larsen',
      dateOfBirth: '07/24/1965',
      startDate: '01/20/2017',
      street: '28 Ferry Place',
      city: 'Cochranville',
      state: 'VA',
      zipCode: 1263,
      department: 'sales',
    },
    {
      firstname: 'Joy',
      lastname: 'Mullen',
      dateOfBirth: '05/03/1953',
      startDate: '10/02/2019',
      street: '86 Wilson Street',
      city: 'Wildwood',
      state: 'WA',
      zipCode: 8773,
      department: 'human resources',
    },
    {
      firstname: 'Hansen',
      lastname: 'Clarke',
      dateOfBirth: '01/27/1974',
      startDate: '05/21/2014',
      street: '27 Abbey Court',
      city: 'Gila',
      state: 'CA',
      zipCode: 1303,
      department: 'human resources',
    },
    {
      firstname: 'Cobb',
      lastname: 'Howard',
      dateOfBirth: '09/28/1981',
      startDate: '12/30/2019',
      street: '18 Cropsey Avenue',
      city: 'Hoagland',
      state: 'NH',
      zipCode: 4295,
      department: 'sales',
    },
  ],
}

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({ employees: employeesSlice.reducer }),
})
