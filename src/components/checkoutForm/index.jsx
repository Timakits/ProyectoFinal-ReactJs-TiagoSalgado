import React, { useState } from "react";
import "./styles.css";

//MUI
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

//Formik


//Yup (validation schema)
import * as yup from "yup";

// Components


const yupSchema = yup
  .object({
    name: yup.string().min(2).max(30).required(),
    phone: yup.number().min(10).required(),
    email: yup.string().email().required(),
  })
  .required();



  const CheckOutForm = ({onConfirm}) => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');


    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {name, phone, email}

        onConfirm(userData);
    }

    return (
        <div className='container-Form'>
          <h3>Complete el siguiente formulario para reservar la orden de compra</h3>
            <form onSubmit={handleConfirm} className='form'>
                <label className='Label'>
                    <TextField className='TextField' type='text' placeholder="Nombre y apellido" value={name} sx={{marginTop: 2}} onChange={({target}) => setName(target.value)}></TextField>
                </label>
                <label className='Label'>
                    <TextField className='TextField' type='text' placeholder="Telefono" value={phone} sx={{marginTop: 2}} onChange={({target}) => setPhone(target.value)}></TextField>
                </label>
                <label className='Label'>
                    <TextField className='TextField' type='text' placeholder="Email" value={email} sx={{marginTop: 2}} onChange={({target}) => setEmail(target.value)}></TextField>
                </label>
                <div className='Label'>
                    <Button variant="contained" type='submit' className='TextField' sx={{marginTop: 2}}>Crear Orden</Button>
                </div>
            </form>
        </div>

    )
}

export default CheckOutForm;