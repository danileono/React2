import React from 'react'
import { useState } from 'react'
import SocialButton from './SocialButton'
import Alert from './Alert'
import { validateName, validateEmail } from '../utils/Utils'



const Formulario = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setconfirmPassword] = useState("")
const [error, setError] = useState("");
const [show, setShow] = useState(false);

const subscribe = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
        setError('El nombre contiene caracteres inválidos');
        return;
    }

    if (!validateEmail(email)) {
        setError('El correo no es válido');
        return;
    }

    if (confirmPassword !== password ) {
        setError('Las contraseñas no coinciden');
        return;
    }


    setShow(true);
    setError("");

    }

    const closeAlert = ()=>{
        setName("")
        setEmail("")
        setPassword("")
        setconfirmPassword("")
        setShow(false)

}


return (

    <>
        <form className="subscription-form" onSubmit={subscribe}>

            <input id='name' 
            type='text' 
            className="form-control" 
            placeholder='Nombre' 
            required 
            onChange={(e)=> setName(e.target.value)} 
            value={name} />
            

            <input id='email' 
            type='email' 
            className="form-control" 
            placeholder='tuemail@ejemplo.com' 
            required 
            onChange={(e)=> setEmail(e.target.value)} 
            value={email} />


            <input id='password' 
            type='password' 
            className="form-control" 
            placeholder='Contraseña' 
            required 
            onChange={(e)=> setPassword(e.target.value)} 
            value={password} />

            <input id='confirmPassword' 
            type='password' 
            className="form-control" 
            placeholder='Confirma tu contraseña' 
            required 
            onChange={(e)=> setconfirmPassword(e.target.value)} 
            value={confirmPassword} />



            <div type="button" className="btn btn-success">
                <button type='submit'>Registrarse</button>
            </div>

            <p className="error">{error}</p>

        </form>
        
        <Alert show={show} name={name} close={closeAlert}></Alert>
</>
)
}



export default Formulario