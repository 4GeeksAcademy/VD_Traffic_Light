import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	// declaro el estado del boton
	   let   [chosenColor, setChosenColor]=useState("id");
	
	// genero la funcion que va a determinar a que boton le hago click
	function selectedColor(e){
		setChosenColor(e.target.id);

	}
	return (
		// genero los contenedores para el fondo y ubicacion de los botones
		<div className="d-flex align-items-center justify-content-center vh-100">
		<div className="bg-dark p-5 d-flex flex-column justify-content-center align-items-center gap-2 rounded">			
			{/* al evento onClick del componente button le paso la funcion que va a determinar el estado de los botones */}
			<button onClick={selectedColor} id="red" className={`p-5 rounded rounded-pill bg-danger ${chosenColor=="red" ? "opacity-100":"opacity-50"}`} style={{width: '50px'}}></button>
			<button onClick={selectedColor} id="yellow" className={`p-5 rounded rounded-pill bg-warning ${chosenColor=="yellow" ? "opacity-100":"opacity-50"}`} style={{width: '50px'}}></button>
			<button onClick={selectedColor} id="green" className={`p-5 rounded rounded-pill bg-success ${chosenColor=="green" ? "opacity-100":"opacity-50"}`} style={{width: '50px'}}></button>
		</div>
		</div>
	);
};

export default Home;
