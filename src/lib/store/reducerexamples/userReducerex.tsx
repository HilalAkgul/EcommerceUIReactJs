import {useState} from 'react';
import User from '../../models/userModel';


function userReducerex(tasks:any, action:any) {
    if (action.type === 'login') {
   
      return   {name: action.name,
        surname:action.username };
    }
    else if (action.type === 'logout') {
        return   {name: "",
                  surname:"" };
      }
    else {
      throw Error('Unknown action: ' + action.type);
    }
  }

  export default userReducerex;