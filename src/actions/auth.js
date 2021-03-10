import { types } from "../components/types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startGoogleLogin=()=>{
  return(dispatch) =>{
      // Extraemos el user de lo que nos devuelve firebase
     firebase.auth().signInWithPopup(googleAuthProvider).then(({user}) =>{
      dispatch(login(user.uid, user.displayName))
    });
  }
}

export const startLoginEmailPassword=(email, password) =>{
  return(dispatch)=>{
    setTimeout(() => {
      dispatch(login(123,'Pedro'));
    }, 3500);
  }
}
