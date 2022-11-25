import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { actionAddRestaurantAsync } from '../../../../redux/actions/restaurantAction';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fileUpLoad  } from "../../../../services/fileUpLoad";
import { category, restaurantList } from "../../../../services/dates";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const schema = yup.object({
    name: yup.string().required("Debe ingresar el restaurante"),
    category: yup.string().required("Debe seleccionar una categoría"),
    before: yup.string().required("Debe agregar un before"),
    time: yup.string().required("Debe incluir una hora de apertura y cierre por ejemplo 09:00-21:00"),
  });

const AddRestaurant = () => {
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
          time: data.time,
          before: data.before,
          image
        };
        console.log(newRestaurant);
        dispatch(actionAddRestaurantAsync(newRestaurant));
        navigate('/home');
      };
      const navigate = useNavigate();
      const returnRestaurants = () =>{
          navigate('/adminRestaurant');
        }
    
  return (
    <div className="p-5">
 <span onClick={returnRestaurants}><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span>
    <h1>Agregar un nuevo Restaurante</h1>
    <Form onSubmit={handleSubmit(onSubmit)}>
      {restaurantList.map((item, index) => {
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

export default AddRestaurant