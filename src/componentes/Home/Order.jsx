import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetOrderAsync } from "../../redux/actions/orderActions";
import Footer from "../footer/Footer";

const Order = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const  {order} = useSelector((store) => store.orderStore);

 const filterOrder = order.filter(element =>(
  element.user === user.email
 ))


  useEffect(() => {
    dispatch(actionGetOrderAsync());
  }, [dispatch]);
  return (
    <>
      <div className="cardOrder">
        {filterOrder && filterOrder.length ? (
          filterOrder.map((item, index) => (
            <article key={index} className="order">
              <img src={item.image} alt="Comida" />
              <div className="infoOrder">
                <span><strong>Nombre:</strong> {item.name}</span>
                <span><strong>Precio:</strong> ${item.price}</span>
                <span><strong>Restaurant:</strong> {item.idRestaurant}</span>
                <span><strong>Cantidad:</strong> {item.quantity}</span>
              </div>
            </article>
          ))
        ) : (
          <div className="notOrder">
            <h3>No tienes pedidos</h3>
            <img src="https://i.pinimg.com/564x/13/f3/4c/13f34c38e87a934d8dd02a22430249ba.jpg" alt="" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Order;
