import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  '../css/login.css';
import ServerManager from '../lib/services/ServerManager';

function Login() {
  let navigate = useNavigate();
  const cartState = useSelector((state:any) => state.CartReducer.cartCount);
  const user = useSelector((state:any) => state.UserReducer.userId);
  var dispatch=useDispatch();
   const [username,setusername]=useState('');
   const [password,setpassword]=useState('');
 

   const handleUsername = (e:any) => {
     console.log(e.target.value)
  setusername(e.target.value);
  }
  const handlePassword= (e:any) => {
    console.log(e.target.value)
 setpassword(e.target.value);
 }
  const onPress = async () => {

    const userRes =await ServerManager.User.login(username,password);

    if (userRes.data.userId>0) {
      navigate("/productlist"); 
      localStorage.setItem('userId',userRes.data.userId );
      dispatch({
        type:'login',
        payload:userRes.data.userId
      });
      const res = await ServerManager.Carts.getCartCount(userRes.data.userId);

    if (res.data) {
      localStorage.setItem('cartCount',res.data);
      dispatch({
        type:'CartCount',
        payload:res.data
      });
      
    }
    }
    else{
      alert("Kullanıcı bilgileri yanlış")
    }
  };
    return (
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              onKeyUp={handleUsername}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onKeyUp={handlePassword}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary"
            onClick={onPress}
            
            >
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
    );
  }

  
  

  export default Login;

function useHistory() {
  throw new Error('Function not implemented.');
}
