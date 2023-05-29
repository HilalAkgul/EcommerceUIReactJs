import {useState} from 'react';

const initialUser={
    name:"",
    surname:"",
    userId:0
}

function userReducertest(tasks:any, action:any) {
  console.log(action);
    if (action.type === 'login') {
      initialUser.name=action.data.name;
      initialUser.surname=action.data.surname;
      initialUser.userId=action.data.id;
      return   initialUser;
    }
    else if (action.type === 'logout') {
      initialUser.name="";
      initialUser.surname="";
      initialUser.userId=0;
      return   initialUser;
      }
    else {
      throw Error('Unknown action: ' + action.type);
    }
  }

  export default userReducertest;