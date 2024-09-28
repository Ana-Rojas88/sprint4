import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { fileUpLoad } from "../services/fileUpLoad";
import "./style.scss"
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { actionRegisterAsync } from "../../redux/actions/UserActions";

const passwordRegex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const schema = yup.object({
  name: yup.string().required("Por favor ingresar su nombre completo"),
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup
    .string()
    .required("Por favor ingresar contraseña")
    .matches(passwordRegex, {
      message:
        "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico",
    })
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .max(16, "La contraseña debe contener máximo 16 caracteres")
    .oneOf([yup.ref("repeatPassword")], "La contraseña ingresada no coincide"),
  repeatPassword: yup
    .string()
    .required("Por favor confirme la contraseña")
    .oneOf([yup.ref("password")], "La contraseña ingresada no coincide"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const { error, errorMessage } = useSelector((store) => store.user);

  const onSubmit = async (data) => {
    
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
     
    }
    dispatch(actionRegisterAsync(user));
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Tu cuenta se ha creado exitosamente!", "success");
    }
  };


  return (
    <div className='containerRegister'>
      <h2>Crear Cuenta</h2>
      <div className="section_form">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          NOMBRE <br />
          <input type="text"
            {...register("name")} />
          <hr />
        </label>
        <p>{errors.name?.message}</p>
        <label>
          CORREO <br />
          <input type="email"
            {...register("email")} />
          <hr />
        </label>
        <p>{errors.email?.message}</p>
        <label>
          CONTRASEÑA <br />
          <input type="password"
            {...register("password")} />
          <hr />
        </label>
        <p>{errors.password?.message}</p>
        <label>
       CONFIRMAR CONTRASEÑA <br />
     <input type="password" 
       {...register("repeatPassword")}/>
       <hr />
    </label>
        <p>{errors.repeatPassword?.message}</p>
        <Button  variant="warning" class="btn btn-primary" type="submit">Registrar</Button>
      </Form>
      <p><em>¿Ya tienes una cuenta? </em> <br /> <Link className="linkLogin" to="/Login">Iniciar sesión</Link></p>
    </div>
    </div>
  );
};

export default Register;