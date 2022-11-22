import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './style.scss';

const Details = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [cantidadFood, setCantidadFood] = useState(1);
    const handleClick = (operation) => {
        if (operation === "plus") {
            const incremento = cantidadFood + 1;

            setCantidadFood(incremento);
        } else {
            const decremento = cantidadFood - 1;
            setCantidadFood(decremento);
        }
    };

    useEffect(() => {
        getDetailsFood()
    }, [])

    const [detailFood, setDetailFood] = useState()
    const info = useSelector((store) => store.foodStore);

    const getDetailsFood = () => {
        const dataFood = info.food.slice();
        const descriptionFood = dataFood.find(food => food.name === name)
        setDetailFood(descriptionFood)
    }


    return (
        <div>
            {
                detailFood ? (
                    <div className='cardDetails'>
                        <span><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span>
                        <div className='imageDetails'>
                            <img src={detailFood.image} alt="restaurant" />
                        </div>
                        <div className='info'>
                            <h2>{detailFood.name}</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quod nesciunt modi iste, cupiditate dolore? Et, illo inventore dignissimos eos dolor eum quos delectus praesentium voluptatum aliquid rem. Harum, non!</p>
                        </div>
                        <div className='counter_price'>
                        <div className='counter'>
                            <button disabled={cantidadFood <= 1}
                                onClick={() => {
                                    handleClick("minus");
                                }}>-</button>
                            <h4>{cantidadFood}</h4>
                            <button onClick={() => {
                                handleClick("plus");
                            }}>+</button>
                        </div>
                        <p>
                            <h4>Add</h4>
                        <h4>${cantidadFood * detailFood.price}</h4>
                        </p>
                    </div>
                    </div>
                ) : (
                    <div>No hay información</div>
                )
            }

        </div>
    )
}

export default Details