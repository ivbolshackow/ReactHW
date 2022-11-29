import { combineReducers } from 'redux'
import { profileCheckboxReducer } from './profileCheckboxReducer'

export const rootReducer = combineReducers({
    checked: profileCheckboxReducer,
})