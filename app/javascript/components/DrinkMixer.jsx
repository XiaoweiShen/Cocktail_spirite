import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

// export default () => (
//     <div>
//         <div className="mixer-1">

//             <div className="mixer-2">
//                 <h1>TEST</h1>
//             </div>

//             <div className="mixer-3">
//                 <div>
//                     <h1>TEST</h1>
//                 </div>
//                 <div>
//                     <h1>TEST</h1>
//                 </div>

//                 <div>
//                     <h1>TEST</h1>
//                 </div>
//             </div>

//         </div>
//     </div>
// );

export default () => {
	const [ingredients, setIngredients] = useState([]);
	useEffect(() => {
		axios.get("/ingredients.json").then((res) => {
			setIngredients(res.data)
		});
	}, []);

	const ingredientsList = ingredients.map(ingredient => {
		return (
			<div key={ingredient.id} >
				<h1>{ingredient.name}</h1>
				<img className="drink-list-img" src={`http://${ingredient.image}`}></img>
			</div>
		)
	});

	return (
		<div>
			<h1>INGREDIENTS</h1>
			{ingredientsList}
		</div>
	);
};

// send params as a object
// id: [1, 2]
// params[:id]
// request.query_parameters['id']
// axios.get(url, { ingredientIds: [2, 4]})
// in controller
// ingredientIds = request.query_parameters['ingredientIds'']

// google.com/search?q=howtodosomething
// query = request.query_parameters['q'']

// axios.get('/api', { id: 1})
// become 'localhost:3000/api?id=1'

// localhost:3000/api?ingredientIds[0]=2&ingredientIds[0]=4
// localhost:3000/api?ingredientIds[0]=2&ingredientIds[1]=4

// pp request.query_parameters['ingredientIds'']
// [2, 4]

// axios.get(url, { ingredientIds: [2, 4]})

// 1 pick a ingredient
// 2 query to rails
// 3 rails return a json include all available ingredients
// 4 pick ingre till you find the cocktail
// 5 query rails with the cocktail name
// 6 rails return the detail of the drink