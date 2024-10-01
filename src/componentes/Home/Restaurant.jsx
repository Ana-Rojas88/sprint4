import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  actionFilterFoodAsync,
  actionGetFoodAsync,
} from "../../redux/actions/foodActions";
import { category } from "../../services/dates";
import { Button } from "react-bootstrap";
import arrowIcon from "../../assets/atras.png"
import cocinero from "../../assets/cocinero.png"
import "./style.scss";
import FilterButton from "../Header/FilterButton";

const Restaurant = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();

  useEffect(() => {
    infoRestaurant();
  }, []);

  const [restaurantInfo, setRestaurantInfo] = useState();
  const restaurants = useSelector((store) => store.restaurantStore);
  const { food } = useSelector((store) => store.foodStore);

  const infoRestaurant = () => {
    const dataRestaurant = restaurants.restaurant.slice();
    const getRestaurants = dataRestaurant.find(
      (restaurant) => restaurant.name === name
    );
    setRestaurantInfo(getRestaurants);
  };

  useEffect(() => {
    dispatch(actionGetFoodAsync());
  }, [dispatch]);

  const filterFood = food.filter((e) => e.idRestaurant === name);
  console.log(filterFood);

  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterFoodAsync(searchParam, searchValue));
  };

  const home = () => {
    navigate("/home");
  };
  return (
      <div className="infoRestaurant">
        {restaurantInfo ? (
          <section className="Restaurant">
            <div className="logoRestaurant">
                <img 
                className="arrow"
                onClick={home}
                  src={arrowIcon}
                  alt="Backreturn"
                />
              <img 
              className="imgLogo"
                src={cocinero}
                alt="Logologorestaurant"
              />
              <h4>{restaurantInfo.name}</h4>
            </div>
            <div className="cardRestaurant">
              <img src={restaurantInfo.image} alt="restaurant" />
              <div className="info">
                <span>{restaurantInfo.name}</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  expedita consequatur architecto porro quod hic
                </p>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </section>
        ) : (
          <div>No hay información</div>
        )}
          <FilterButton />
        <div className="cardFood">
          {filterFood && filterFood.length ? (
            filterFood.map((food, index) => (
              <article
                key={index}
                className="food"
                onClick={() => {
                  navigate(`/details/${food.name}`);
                }}
              >
                <div className="imgFood">
                  <img src={food.image} alt="Restaurant" />
                </div>
                <h4>{food.name}</h4>
                <span>$ {food.price}</span>
              </article>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
  );
};

export default Restaurant;
