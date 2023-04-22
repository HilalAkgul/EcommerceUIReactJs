import { useReducer} from "react";
import userReducer from "../lib/reducer/userReducer";

function User(){
    
    const [currentUser,dispatch]=useReducer(userReducer,{name:"",surname:""});

    function handleClick(){
      dispatch({type:'update',data:{name:"hilal",surname:"akgül"}});
    }
    return(
       <div className="container">
       
        <button className="btn btn-primary" onClick={handleClick}>{currentUser.name}</button>
        </div>
    )
}

export default User;