import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { auth } from "../../firebase/firebaseConfig";
  import { userTypes } from "../types/userType";
  
  export const actionRegisterAsync = ({ email, password, name, avatar }) => {
    return (dispatch) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          console.log(user);
          const { accessToken, photoURL, phoneNumber } = user.auth.currentUser;
          await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: avatar,
          });
          dispatch(
            actionRegisterSync({
              email,
              name,
              accessToken,
              photoURL,
              phoneNumber,
              error: false,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          dispatch(actionRegisterAsync({ error: true, errorMessage }));
        });
    };
  };
  
  const actionRegisterSync = (user) => {
    return {
      type: userTypes.USER_REGISTER,
      payload: {
        ...user,
      },
    };
  };
  
  export const actionLoginAsync = ({ email, password }) => {
    return (dispatch) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          const { displayName, accessToken, photoURL, phoneNumber } =
            user.auth.currentUser;
          dispatch(
            actionLoginSync({
              email,
              name: displayName,
              accessToken,
              photoURL,
              phoneNumber,
              error: false,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          dispatch(actionLoginSync({ email, error: true, errorMessage }));
        });
    };
  };
  
  const actionLoginSync = (user) => {
    return {
      type: userTypes.USER_LOGIN,
      payload: {
        ...user,
      },
    };
  };
  
  export const actionLogoutAsync = () => {
    return (dispatch) => {
      signOut(auth)
        .then(() => {
          dispatch(actionLogoutSync());
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  const actionLogoutSync = () => {
    return {
      type: userTypes.USER_LOGOUT,
    };
  };
  