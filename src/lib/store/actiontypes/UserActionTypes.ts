export enum UserActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
  }
  
  export type UserActions = { type: UserActionTypes.LOGIN; data: any } | { type: UserActionTypes.LOGOUT };
  