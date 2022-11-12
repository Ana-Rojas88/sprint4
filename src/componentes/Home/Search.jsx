import React from 'react'
import Footer from '../footer/Footer'
import './style.scss'


const Search = () => {
    return (
        <>
        <section className='search'>
            <div className='search__input'>
            <img src="https://i.ibb.co/syQ2PvC/Svg-2.png" alt="Search" />
                <input type="text" placeholder='Search for a dish' />
            </div>
            <div className='search__list'>
                <span>Recent searches</span>
                <ul>
                    <li>Pizza</li>
                    <li>Burger</li>
                    <li>Sushi</li>
                </ul>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Search