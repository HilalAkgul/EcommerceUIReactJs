
const initialState = {
  userId:null
};

const UserReducer = (state = initialState, action: any) => {
  console.log(action.payload);
  switch (action.type) {

    case 'login':
      return {
        ...state,     
       userId:action.payload
      };

    case 'logout':
      return {
        ...state, 
        userId:null
      };

    default:
      return state;
  }
};

export default UserReducer;
