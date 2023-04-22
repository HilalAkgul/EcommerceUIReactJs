
const initialState = {
  userId:1
};

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case 'login':
      return {
        ...state,     
       userId:action.payload
      };

    case 'logout':
      return {
        userId:0
      };

    default:
      return state;
  }
};

export default UserReducer;
