import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionFilterAsync, actionGetFoodAsync } from '../../redux/actions/foodActions'
import imgSearch from '../../assets/search.png'
import Footer from '../footer/Footer'
import './style.scss'


const Search = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [search, setSearch] = useState(false);
    const { food } = useSelector((store) => store.foodStore);

const navigate = useNavigate();

    const onSearch = (data, e) => {
        setSearch(e.target.value);
        const searchParam = data.search
        console.log(searchParam);
        dispatch(actionFilterAsync(searchParam));
       
    }

useEffect(() => {
    dispatch(actionFilterAsync());
}, [dispatch])


    const restoreFood = ({ target }) => {
        if (target.value.trim() === '') {
            dispatch(actionFilterAsync());
        }
    }

    return (
        <>
            <section className='search'>
                <form className='search__input' onSubmit={handleSubmit(onSearch)}>
                    <button type='submit'><img src={imgSearch} alt="Search" /></button>
                    <input type="search" placeholder='Search for a dish'
                        {...register('search', { required: true })}
                        onChange={restoreFood} />
                </form>
                <div className='infoSearch'>
                    {food && food.length ? (
                        food.map((food, index) => (
                            <div key={index} className='cardSearch' onClick={() =>{navigate(`/details/${food.name}`)}} >
                              <div className='image'><img src={food.image} alt="imagen" /></div>  
                              <p> <h5>{food.name}</h5>
                                <span>${food.price}</span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <>
                        <div className='search__list'>
                    <span>Recent searches</span>
                    <ul>
                        <li>Pizza</li>
                        <li>Burger</li>
                        <li>Sushi</li>
                    </ul>
                </div>
                        </>
                    )}
                </div>
                
            </section>
            <Footer />
        </>
    )
}

export default Search