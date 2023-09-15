import React, { useState } from "react";
import "./styles.css";

//MUI
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

//React hook form
import { useForm } from "react-hook-form";

const CheckOutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleConfirm = (event) => {
    const userData = { name, phone, email };
    onConfirm(userData);
  };

  return (
    <div className="container-Form">
      <h3>Complete el siguiente formulario para reservar la orden de compra</h3>
      <form onSubmit={handleSubmit(handleConfirm)} className="form">
        <label className="Label">
          <TextField
            className="TextField"
            type="text"
            value={name}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
            sx={{ marginTop: 2, color: "white" }}
            onChange={({ target }) => setName(target.value)}
          />
          {errors.name?.type === "required" && (
            <h4 className="errorAlert">Es obligatorio completar este campo</h4>
          )}
          {errors.name?.type === "minLength" && (
            <h4 className="errorAlert">Ingresar un minimo de 2 caracteres</h4>
          )}
          {errors.name?.type === "maxLength" && (
            <h4 className="errorAlert">Ingresar un maximo de 30 caracteres</h4>
          )}
        </label>
        <label className="Label">
          <TextField
            className="TextField"
            type="number"
            value={phone}
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            {...register("phone", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
            sx={{ marginTop: 2, color: "white" }}
            onChange={({ target }) => setPhone(target.value)}
          />
          {errors.phone?.type === "required" && (
            <h4 className="errorAlert">Es obligatorio completar este campo</h4>
          )}
          {errors.phone?.type === "minLength" && (
            <h4 className="errorAlert">Ingresar un minimo de 10 numeros</h4>
          )}
          {errors.name?.type === "maxLength" && (
            <h4 className="errorAlert">Ingresar un maximo de 10 numeros</h4>
          )}
        </label>
        <label className="Label">
          <TextField
            className="TextField"
            type="text"
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email", { pattern: /\S+@\S+\.\S+/ })}
            sx={{ marginTop: 2 }}
            onChange={({ target }) => setEmail(target.value)}
          />
          {errors.email?.type === "pattern" && (
            <h4 className="errorAlert">Formato de email incorrecto</h4>
          )}
        </label>
        <div className="Label">
          <Button
            variant="contained"
            type="submit"
            className="TextField"
            sx={{ marginTop: 2 }}
            value="enviar"
          >
            Crear Orden
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
