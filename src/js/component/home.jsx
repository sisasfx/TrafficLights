import React from "react";
import { useState, useEffect } from "react";

const Colors = {
	rojo: "",
	amarillo: "",
	verde: ""
}
//create your first component
const Home = () => {
	const [colors, setColor] = useState(Colors)


	useEffect(() =>
		setColor({})
	,[])

	return  (
		<div className="container">
			<div className= {"rojo " + colors.rojo} onClick={() => setColor({...Colors, rojo: "selected"})}></div>		
			<div className={"amarillo "+ colors.amarillo} onClick={() => setColor({...Colors, amarillo: "selected"})}></div>
			<div className={"verde "+ colors.verde} onClick={() => setColor({...Colors, verde: "selected"})}></div>
			<div className={"purple" + colors.purple} onClick={() => setColor({...Colors.purple, purple: "selected"})}></div>
		</div>
	)
};

export default Home;
