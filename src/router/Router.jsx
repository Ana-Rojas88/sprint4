import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { auth } from "../firebase/firebaseConfig";
import Register from "../componentes/LoginAndRegister/Register";
import Login from "../componentes/LoginAndRegister/Login";
import Index from "../componentes/Index";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { actionLoginAsync } from "../redux/actions/UserActions";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);
  const userStore = useSelector((store) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
          const {
            displayName,
            email,
            phoneNumber,
            accessToken,
            photoURL,
            uid,
          } = user.auth.currentUser;
          dispatch(
            actionLoginAsync({
              name: displayName,
              email,
              accessToken,
              phoneNumber,
              avatar: photoURL,
              uid,
              error: false,
            })
          );
        }


      } else {
        setIsLoggedIn(false);
      }
      setCheck(false)

    }

    );
  }, [setIsLoggedIn, dispatch, userStore]);

  if (check) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
      {/* <NavigationBar isAutentication={isLoggedIn} /> */}
      <Routes>
        <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Index />} />
        </Route>
        <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
          <Route path="/*" element={<DashboardRouter isAutentication={isLoggedIn} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
