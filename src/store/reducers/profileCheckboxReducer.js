import { initState } from '../initState'

export const profileCheckboxReducer = (state = initState, action) => {
    
    const {type} = action;
    switch (type) {
        case 'PUSH':
            return state.profileCheckboxState;
    
        default:
            return state;
    }
}