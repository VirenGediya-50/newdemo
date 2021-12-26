const InitalState = {
    userList : []
}

export const UserReducer = (state = InitalState , action) => {
    switch (action.type) {
        case 'SUBMIT_USER_DATA':
            const newUserList = [...state.userList];
            newUserList.push(action.payload);
            return {...state, userList : [...newUserList]}
        default:
            return state
    }
}