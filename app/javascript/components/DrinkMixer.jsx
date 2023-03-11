import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default () => {
  //This will give me the list of ingredients with just their id at /ingredients.json
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    axios.get("/ingredients.json").then((res) => {
      setIngredients(res.data)
    });
  }, []);

  //This will give me the list of drinks with just their id at /drinks.json
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    axios.get("/drinks.json").then((res) => {
      setDrinks(res.data)
    });
  }, []);


  //When I select an ingredient...its ID stored here
  const [selectedIngredientId, setSelectedIngredientId] = useState([]);
  //filter through drink_ingredients

  //a list of drinks with the ingredient selected and a list of all the ingredients from those drinks will show at drink_ingredients/${id}.json
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [ingredientHistory, setIngredientHistory] = useState([])


  useEffect(() => {
    if (selectedIngredientId) {
      setDrinkIngredients([])
      selectedIngredientId.map((ingredient_id) => {
        axios.get(`/drink_ingredients/${ingredient_id}.json`).then(res => {
          setDrinkIngredients((prev) => [...prev, res.data]);
          console.log('INGREDIENTS AND DRINKS DATA', res.data)
        });
      })
    }
  }, [selectedIngredientId]);


  //import helper function for filter.
  // let array_of_drinks = drinkIngredients['drink_ingredient'];
  // let array_of_selections = drinkIngredients["available_ingredient_list"];

  // setDrinkIngredients(filter(drinkIngredients, ingredient_id, array_of_selections))




  //render ...

  // ingredients[id].image.forEach{
  //   onclick = {//send the id to filter fuction as 2nd params }

  //   }
  //props.


  // filter
  // let matched = []
  // drinkIngredients.drink_ingredient.forEach((drinkIngredient) => {
  //   if (drinkIngredient.id === drinks.id) {
  //     matched.push(drinks.id)
  //   }
  // });

  //useState
  //array of the ingredient ID
  //trace available ingredient list.
  //available ingredient list

  //Click ingredient and sets the id ^^^^^
  function handleIngredientSelect(id) {
    {
      setSelectedIngredientId((prev) => {
        let index = selectedIngredientId.indexOf(id)
        if (index === -1) {
          return [...prev, id]
        } else {
          prev.splice(index, 1)
          return prev
        }
      });
      
    }
  }
console.log("SELECTED INGREDIENT ID", selectedIngredientId)


  //filter return drinks that have the selected ingredients
  // const filteredUserSelection = drinks.filter(x => x.ingredients.find((i) => selectedIngredientId.includes(i)));
  const filteredUserSelection = drinks.filter(drink => drinkIngredients.find((i) => i.drink_ingredient.find((j) => j.id === drink.id)));
  //compares the id of the drink.
  console.log('FILTER USER SELECTION', filteredUserSelection)

  const ingredientFilter = selectedIngredientId.length === 0 ? ingredients : ingredients.filter((ingredient) => drinkIngredients.find((i) => i.available_ingredient_list.includes(ingredient.id)));
  console.log('INGREDIENT FILTER', ingredientFilter)
  //if a selection is not made yet. show all the ingredients. otherwise filter the ingredients. and only return the ingredient. drinks that are created
  //if gin is selected previously and every other ingredients only shows related ingredients related to gin (drink)

  //lists out all the ingredients as clickable buttons
  const ingredientsList = ingredientFilter.map(ingredient => {
    return (
      <button key={ingredient.id} onClick={() => handleIngredientSelect(ingredient.id)}>
        {ingredient.name}
      </button>
    )
  });

  // const drinkIngredientList = drinkIngredients.drink_ingredient.map(drinkIngredient => {
  //   return (
  //     <li>
  //       {drinkIngredients.drink_ingredient.id}
  //     </li>
  //   )
  // })

  return (
    <div>
      <h2>Ingredients</h2>
      {ingredientsList}

      {/* <h2>Available Drinks</h2>
      <ul>
        {array_of_drinks}
      </ul>
      <h2>Available Ingredients</h2>
      <ul>
        {array_of_selections}
      </ul>
      <h2>What you already selected</h2>
      <ul>
        {selectedIngredientId}
      </ul> */}
    </div>
  );

}

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

// export default () => {
// 	const [ingredients, setIngredients] = useState([]);
// 	useEffect(() => {
// 		axios.get("/ingredients.json").then((res) => {
// 			setIngredients(res.data)
// 		});
// 	}, []);

// 	const ingredientsList = ingredients.map(ingredient => {
// 		return (
// 			<div key={ingredient.id} >
// 				<h1>{ingredient.name}</h1>
// 				<img className="drink-list-img" src={`http://${ingredient.image}`}></img>
// 			</div>
// 		)
// 	});

// 	return (
// 		<div>
// 			<h1>INGREDIENTS</h1>
// 			{ingredientsList}
// 		</div>
// 	);
// };



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


// 1 axios request => path in backend db query that finds all drinks that match the ingredient
// another db query to match drink ids
//axios request to get all the drinks that match all the id in the drink ingredients array
