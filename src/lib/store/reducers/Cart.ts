
const initialState = {
 cartCount:0
};

const CartReducer = (state = initialState, action:any) => {
  console.log(action.payload);
  switch (action.type) {
    
    case 'CartCount':
      return {
        ...state,
       cartCount: action.payload
    
      };
  
    default:
      return state;
  }
};

export default CartReducer;
