import {useState} from 'react';

const initialUser={
    name:"",
    surname:""
}

function userReducer(tasks:any, action:any) {
    if (action.type === 'login') {
   
      return   {name: action.data.name,
        surname:action.data.surname };
    }
    else if (action.type === 'logout') {
        return   {name: "",
                  surname:"" };
      }
    else {
      throw Error('Unknown action: ' + action.type);
    }
  }

  export default userReducer;