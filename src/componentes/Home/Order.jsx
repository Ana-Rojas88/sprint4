import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionGetOrderAsync } from '../../redux/actions/orderActions';
import Footer from '../footer/Footer';

const Order = () => {
    const dispatch = useDispatch();
    const { order } = useSelector((store) => store.orderStore);

    useEffect(() => {
        dispatch(actionGetOrderAsync());
      }, [dispatch])

  return (
    <>
    <div className='cardOrder'>
            {order && order.length ? (
          order.map((item, index) => (
            <article key={index} className='order' >
              <img src={item.image} alt="Comida" />
              <div className='infoOrder'>
                <span>{item.name}</span>
                <span>$ {item.price}</span>
                <span>{item.user}</span>
                <span>{item.idRestaurant}</span>
              </div>
            </article>

          ))
        ) : (
          <></>
        )}
    </div>
    <Footer />
    </>
  )
}

export default Order