const Alert = ({ show, name, email, close }) => {

	return (
		<div className={`alert ${show ? "show" : ""}`}>
			<div className="content">
				<h2>Hola {name},</h2>
				<p>has suscrito tu correo {email} exitosamente</p>
                <div className="btn btn-success" onClick={()=> close()}>Aceptar</div>
			</div>
            


		</div>
	);
};

export default Alert;