import React from 'react'
import { useDispatch } from 'react-redux';
import { actionLogoutAsync } from '../../redux/actions/UserActions';
import './style.scss'

const Footer = () => {
    const dispatch = useDispatch();
    const onCloseSession = () => {
        dispatch(actionLogoutAsync());
      };

    return (
        <footer>
            <button><img src="https://i.ibb.co/d5KFZD9/Svg-1.png" alt="Home" border="0" /></button>
            <button><img src="https://i.ibb.co/syQ2PvC/Svg-2.png" alt="Search" border="0" /></button>
            <button><img src="https://i.ibb.co/M8QdhCR/Svg-3.png" alt="Time" border="0" /></button>
            <button onClick={onCloseSession}><img src="https://i.ibb.co/GP9rycb/Svg-4.png" alt="Sesión" border="0" /></button>


        </footer>
    )
}

export default Footer