import React from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'

const Registro = () => {
    return (
    <>
        <div className='card'>
            <h1 className='title'>Crea una cuenta</h1>
            <SocialButton></SocialButton>
            <p className='subtitle'>o usa tu email para registrarte</p>
            <Formulario></Formulario>

        {/* <Alert show={show} name={nombre} email={email}></Alert> */}
        </div>
        
    </>
    )
}

export default Registro