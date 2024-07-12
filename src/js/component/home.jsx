import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	// declaro los estados para los botones
	let [red, setRed]=useState('border-danger');
	let [ green, setGreen]=useState('border-success');
	let [ yellow, setYellow]=useState('border-warning');
	
	// genero la funcion que va a determinar el estado para cada boton
	function state_Click(e){
		
		if(e.target.id==="red"){
			setRed('border-primary')
			setGreen('bg opacity-50 border-success')
			setYellow('bg opacity-50 border-warning')
		}else if(e.target.id==="yellow"){
			setYellow('border-primary')
			setGreen('bg opacity-50 border-success')
			setRed('bg opacity-50 border-warning')
		}else{
			setGreen('border-primary')
			setYellow('bg opacity-50 border-success')
			setRed('bg opacity-50 border-warning')
		}

	}
	return (
		// genero los contenedores para el fondo y ubicacion de los botones
		<div className="d-flex align-items-center justify-content-center vh-100">
		<div className="bg-dark p-5 d-flex flex-column justify-content-center align-items-center gap-2 rounded">			
			{/* al evento onClick del componente button le paso la funcion que va a determinar el estado de los botones */}
			<button onClick={state_Click} id="red" className={"p-5 rounded rounded-pill bg-danger "+ red} style={{width: '50px'}}></button>
			<button onClick={state_Click} id="yellow" className={"p-5 rounded rounded-pill bg-warning "+ yellow} style={{width: '50px'}}></button>
			<button onClick={state_Click} id="green" className={"p-5 rounded rounded-pill bg-success "+ green} style={{width: '50px'}}></button>
		</div>
		</div>
	);
};

export default Home;
