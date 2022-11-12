import React from 'react';
import { Link } from 'react-router-dom';
import '../componentes/footer/style.scss'

const Index = () => {
    return (
        <div className='index'>
            <Link to="/Login">
                <img src="https://i.ibb.co/rtQqyrf/Logocart.png" alt="Logocart" />
            </Link>

        </div>
    )
}

export default Index;