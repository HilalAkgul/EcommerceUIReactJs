import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../css/login.css';
import userReducer from '../lib/reducer/userReducer';
import ServerManager from '../lib/services/ServerManager';

function Login() {
  let navigate = useNavigate();
  const [currentUser,dispatch]=useReducer(userReducer,{name:"",surname:""});
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

    const productListRes =await ServerManager.User.login(username,password);
   console.log(productListRes);
    if (productListRes.data.id>0) {
     
      navigate("/productlist"); 
      localStorage.setItem('userId',productListRes.data.id );
      dispatch({
        type:'login',
        data:productListRes.data.id
      });
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