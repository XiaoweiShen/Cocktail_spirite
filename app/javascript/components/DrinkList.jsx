import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";

export default () => {
	const [drinks, setDrinks] = useState([]);
	useEffect(() => {
		axios.get("/api/drinks").then((res) => {
			setDrinks(res.data)
		})
	}, []);

	const drinkList = drinks.map(drink => {
		return (
			<div key={drink.id} >
				<h1>{drink.name}</h1>
				<img src={drink.image}></img>
			</div>
		)
	})

	return (
		<div>
			<h1>drinks</h1>
			{drinkList}
		</div>
	)
}
