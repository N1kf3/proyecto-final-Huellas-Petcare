import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [userEmail, setUserEmail] = useState();
	const [userPass, setUserPass] = useState();
	const [userName, setUserName] = useState();
	const [userLastName, setUserLastName] = useState();
	const [userPhone, setUserPhone] = useState();
	const navigate = useNavigate();

	const verifyInput=(email,pass,name,last,phone)=>{
		if ((email == undefined)||(pass== undefined)||(name== undefined)||(last== undefined)||(phone== undefined)){
			return false
		} else {
			if((email.trim().length >= 1) && (pass.trim().length >= 1) && (name.trim().length >= 1) && (last.trim().length >= 1)&&(phone.trim().length >= 1)){
				return true
			}
			return false
		}
	}

	const createUser= async(event)=>{
		event.preventDefault();
		let bodyUser= {
			"email": userEmail,
			"password": userPass,
			"name":userName,
			"last_name":userLastName,
			"phone_number":userPhone,
			"medic":false
		}

		if (verifyInput(userEmail,userPass,userName,userLastName,userPhone)){
			console.log("carga datos")
			try{
				const response = await fetch(process.env.BACKEND_URL + "/api/signup",{
					method: "POST",
					headers:{
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(bodyUser)
				})
				if (response.status == 201) {
					alert("Se ha registrado su usuario satisfactoriamente");
					navigate("/login");
				}else{
					alert("Se produjo un error al crear su cuenta");
					throw new Error (response.status);
				}
				
			}
			catch(error){
				console.log(error)
			}
		}else{
			alert("Ingresar los datos requeridos en el formulario para crear el usuario")
		}


	}
	return (
		<div className="container d-flex align-items-center justify-content-center flex-column"style={{minHeight:"99vh"}}>
			<form className="col-4 p-5">
				<div className="d-flex flex-column align-items-center">
					<h2>
						Registro de Cuenta
					</h2>
					<img className="mb-4 mt-1" src="https://www.iconpacks.net/icons/2/free-user-signup-icon-3058-thumb.png" alt="JWT Auth Logo" width="100" height="100" style={{objectFit:"contain"}}/>
				</div>
				<div className="d-flex justify-content-between"> 
					<div className="mb-3 me-3">
						<label htmlFor="userName" className="form-label" >Nombre</label>
						<input type="text" className="form-control" id="userName"  onChange={e=>setUserName(e.target.value)} />
					</div>
					<div className="mb-3">
						<label htmlFor="userLastName" className="form-label" >Apellido</label>
						<input type="text" className="form-control" id="userLastName"  onChange={e=>setUserLastName(e.target.value)}/>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="userPhone" className="form-label" >Número de teléfono</label>
					<input type="text" className="form-control" id="userPhone"  onChange={e=>setUserPhone(e.target.value)}/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label" >Correo Electrónico</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>setUserEmail(e.target.value)}/>				
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
					<input type="password" className="form-control" id="exampleInputPassword1" onChange={e=>setUserPass(e.target.value)}/>
				</div>
				<div className="d-flex flex-column align-items-center">
					<button type="" className="btn text-white" style={{backgroundColor:"#AB46D2"}} onClick={createUser}>Crear Cuenta</button>
				</div>
			</form>
		</div>
	);
};
