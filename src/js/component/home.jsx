import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [Red, setRed] = useState(false);
	const [Yellow, setYellow] = useState(false);
	const [Green, setGreen] = useState(false);
/* use State para manejar los cambios del semaforo */
	return (
		<div className="mainbox d:flex">
			<div className="topstick d:flex text-center mx-auto">

			</div>
			<div className="trafficlightbox d:flex text-center mx-auto">
				<div  className="text-center mx-auto">
					<button id="clear-red"
					onClick={() => {
							setRed(true);
							setYellow(false);
							setGreen(false);
						}}
						className={`${
							Red  === true ? "redbottom" : ""
						} `}>

					</button>

				</div>
				<div iod="clear-yellow" className="text-center mx-auto">
				<button   
				onClick={() => {
							setRed(false);
							setYellow(true);
							setGreen(false);
						}}
						className={`${
							Yellow === true ? "yellowbottom" : ""
						} `}>

</button>

				</div>
				<div id= "clear-green" className="text-center mx-auto">
				<button 
				onClick={() => {
					setRed(false);
					setYellow(false);
					setGreen(true);
				}}
				className={`${
					Green === true ? "greenbottom" : ""
				} `}>

</button>

				</div>

			</div>

		

		</div>
	);
};

export default Home;
