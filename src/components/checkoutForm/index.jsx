import React, { useState } from "react";
import "./styles.css";

//MUI
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

//Formik
import { Formik } from "formik";

//Yup (validation schema)
import * as yup from "yup";

// Components
import Checkout from "../checkout/index";

const yupSchema = yup
  .object({
    Nombre: yup.string().min(2).max(30).required(),
    Telefono: yup.number().min(10).required(),
    Email: yup.string().email().required(),
  })
  .required();



const CheckoutForm = (onConfirm) => {
  const [data, setData] = useState({})

  //funcion que almacena datos y crea la orden
  const submitHandler = (values, resetForm) => {
    const userData = {
      name: values.Nombre,
      phone: values.Telefono,
      email: values.Email,
    };
    
    
    resetForm();
    setData(userData)
    onConfirm(data)
  };
  console.log(typeof onConfirm)
  console.log(data)
  
  return (
    <div className="container-Form">
      <h3>Completa el siguiente formulario para realizar una orden</h3>
      <Formik
        initialValues={{ Nombre: "", Telefono: "", Email: "" }}
        onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
        validationSchema={yupSchema}
      >
        {({ values, handleChange, handleSubmit, isValid, dirty }) => (
          <form onSubmit={handleSubmit} className="form">
            <TextField
              placeholder="Nombre y apellido"
              variant="outlined"
              name="Nombre"
              className="TextField"
              sx={{ mb: "10px" }}
              value={values.Nombre}
              onChange={handleChange}
            />
            <TextField
              placeholder="Numero de telefono"
              variant="outlined"
              name="Telefono"
              className="TextField"
              sx={{ mb: "10px" }}
              value={values.Telefono}
              onChange={handleChange}
            />
            <TextField
              placeholder="Email"
              variant="outlined"
              name="Email"
              className="TextField"
              value={values.Email}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: 5 }}
              disabled={!(isValid && dirty)}
            >
              Enviar orden
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
