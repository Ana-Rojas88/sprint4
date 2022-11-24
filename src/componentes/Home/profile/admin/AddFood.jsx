import React from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { actionAddFoodAsync } from '../../../../redux/actions/foodActions';
import { fileUpLoad } from '../../../../services/fileUpLoad';
import { category, foodList } from "../../../../services/dates";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const schema = yup.object({
    name: yup.string().required("Debe ingresar el nombre de la comida"),
    category: yup.string().required("Debe seleccionar una categoría"),
    idRestaurant: yup.string().required("Debe agregar el nombre del Restaurante"),
    price: yup.number().required("Debe incluir el precio de la comida"),
    description: yup.string().required("Debe agregar una breve descripción de la comida"),
  });

const AddFood = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = async (data) => {
        const image = await fileUpLoad(data.image[0]);
        const newRestaurant = {
          name: data.name,
          category: data.category,
          idRestaurant: data.idRestaurant,
          price: data.price,
          description: data.description,
          image
        };
        console.log(newRestaurant);
        dispatch(actionAddFoodAsync(newRestaurant));
      };
    
    const navigate = useNavigate();
    const returnRestaurants = () =>{
        navigate('/adminRestaurant');
      }
  return (
    <div className="p-5">
 <span onClick={returnRestaurants}><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span>
    <h1>Agregar una nueva comida</h1>
    <Form onSubmit={handleSubmit(onSubmit)}>
      {foodList.map((item, index) => {
        if (item.type === "select") {
          return (
            <FloatingLabel key={index} label={item.label} className="mb-3">
              <Form.Select
                aria-label="Default select example"
                {...register(item.name)}
              >
                <option value="">Open this select menu</option>
                {category.map((item) => (
                  <option
                    key={item.value}
                    value={item.label}
                    className="text-capitalize"
                  >
                    {item.label}
                  </option>
                ))}
              </Form.Select>
              <p>{errors[item.name]?.message}</p>
            </FloatingLabel>
          );
        }
        if (item.type === "textarea") {
          return (
            <FloatingLabel key={index} label={item.label} className="mb-3">
              <Form.Control as="textarea" {...register(item.name)} />
              <p>{errors[item.name]?.message}</p>
            </FloatingLabel>
          );
        }

        return (
          <FloatingLabel key={index} label={item.label} className="mb-3">
            <Form.Control
              type={item.type}
              size={item.type === "file" ? "sm" : ""}
              {...register(item.name)}
            />
            <p>{errors[item.name]?.message}</p>
          </FloatingLabel>
        );
      })}

      <Button variant="warning" type="submit" className="mb-3">
        Agregar Restaurante
      </Button>
    </Form>
  </div>
  )
}

export default AddFood