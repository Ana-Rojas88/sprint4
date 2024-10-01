import React from 'react'
import { actionFilterRestaurantAsync, actionGetRestaurantAsync } from '../../redux/actions/restaurantAction';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { category } from '../../services/dates';
import "./style.scss";

const FilterButton = () => {
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterRestaurantAsync(searchParam, searchValue));
  };
  return (
    <div className="menuFood">
    <Button
      onClick={() => {
        dispatch(actionGetRestaurantAsync());
      }}
    >
      All
    </Button>
    {category.map((item) => (
      <Button
        key={item.value}
        onClick={() => {
          onFiltered(item.label);
        }}
      >
        {item.label}
      </Button>
    ))}{" "}
  </div>
  )
}

export default FilterButton