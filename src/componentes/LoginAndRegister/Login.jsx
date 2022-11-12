import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { actionLoginAsync } from "../../redux/actions/UserActions";
import "./style.scss"

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup.string().required("Por favor ingresar contraseña"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { error, errorMessage } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(actionLoginAsync(data));
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Bienvenido!", "success");
    }
  };

  return (
    <div className='containerRegister'>
      <h1>Sing in</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
          EMAIL <br />
          <input type="email"
           autoComplete="off"
            {...register("email")} />
          <hr />
        </label>
        <p>{errors.email?.message}</p>
        <label>
          PASSWORD <br />
          <input type="password"
          autoComplete="off"
            {...register("password")} />
          <hr />
        </label>
        <p>{errors.password?.message}</p>

        <Button variant="warning" type="submit" className="mt-3 mb-3">
          Iniciar Sesión
        </Button>
      </Form>
      <Link to="/Register">Create new account</Link>
    </div>
  )
}

export default Login