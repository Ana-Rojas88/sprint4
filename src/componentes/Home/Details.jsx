import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionAddOrderAsync } from "../../redux/actions/orderActions";
import "./style.scss";
import Swal from "sweetalert2";
import arrowIcon from "../../assets/atras.png";
import Count from "./Count";
import Footer from '../footer/Footer'

const Details = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const { name } = useParams();
  const dispatch = useDispatch();
  const [cantidadFood, setCantidadFood] = useState(1);


  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const newOrder = {
      user: user.email,
      name: detailFood.name,
      idRestaurant: detailFood.idRestaurant,
      image: detailFood.image,
      quantity: cantidadFood,
      price: cantidadFood * detailFood.price,
    };
    console.log(newOrder);
    dispatch(actionAddOrderAsync(newOrder));
    Swal.fire("Se ha realizado la compra", "success");
    navigate("/order");
  };

  useEffect(() => {
    getDetailsFood();
  }, []);

  const [detailFood, setDetailFood] = useState();
  const info = useSelector((store) => store.foodStore);

  const getDetailsFood = () => {
    const dataFood = info.food.slice();
    const descriptionFood = dataFood.find((food) => food.name === name);
    setDetailFood(descriptionFood);
  };

  return (
    <>
    <div>
      {detailFood ? (
        <div className="cardDetails">
            <span>
            <img
              className="arrow"
              onClick={()=>{navigate('/home')}}
              src={arrowIcon}
              alt="Backreturn"
            />
          </span>

          <div className="imageDetails">
            <img src={detailFood.image} alt="restaurant" />
          </div>
          <div className="info">
            <h2>{detailFood.name}</h2>
            <p>{detailFood.description ? detailFood.description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quod nesciunt modi iste, cupiditate dolore? Et, illo inventore dignissimos eos dolor eum quos delectus praesentium voluptatum aliquid rem. Harum, non!"}</p>
            <p>
           
            </p>
          </div>
          <div className="counter_price">
            <Count setCantidadFood={setCantidadFood} cantidadFood={cantidadFood} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <button type="submit">Add</button>
              <h4>${cantidadFood * detailFood.price}</h4>
            </form>
          </div>
        </div>
      ) : (
        <div>No hay información</div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Details;
