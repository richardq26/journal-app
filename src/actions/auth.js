import { types } from "../components/types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    // Extraemos el user de lo que nos devuelve firebase
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async({ user }) => {
        // Thunk sirve para usar dispatch después de realizar acciones asíncronas
        dispatch(login(user.uid, user.displayName));
      }).catch(e=>{
        console.log(e)
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  // El dispatch es de thunk
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async({ user }) => {
        await user.updateProfile({ displayName: name });
        // Thunk sirve para usar dispatch después de realizar acciones asíncronas
        dispatch(login(user.uid, user.displayName));
      }).catch(e=>{
        console.log(e)
      });
  };
};
