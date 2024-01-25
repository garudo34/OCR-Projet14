import { createSlice } from '@reduxjs/toolkit'

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (currentState, action) => {
      const listWithNewEmployee = [...currentState, action.payload]
      return listWithNewEmployee
    },
  },
})

export const { addEmployee } = employeesSlice.actions
