import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { filter2 } from "../helper/test";


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

  //a list of drinks with the ingredient selected and a list of all the ingredients from those drinks will show at drink_ingredients/${id}.json
  const [drinkIngredients, setDrinkIngredients] = useState([]);

  useEffect(() => {
    if (selectedIngredientId) {
      setDrinkIngredients([]) //resets data
      selectedIngredientId.map((ingredient_id) => {
        axios.get(`/drink_ingredients/${ingredient_id}.json`).then(res => {
          setDrinkIngredients((prev) => [...prev, res.data]);
          console.log('INGREDIENTS AND DRINKS DATA', res.data)
        });
      })
    }
  }, [selectedIngredientId]);


  //Click ingredient and sets the id ^^^^^
  function handleIngredientSelect(id) {
      // let temparray= [...selectedIngredientId,id];
      // const filter_result = filter2(drinkIngredients,temparray);
      // console.log('-----------',filter_result);
    setSelectedIngredientId((prev) => {
      const index = prev.indexOf(id);
      if (index === -1) {
        // adds the ingredient ID to the selected list if not already there
        console.log("ARRAY", [...prev, id])
        return [...prev, id];
      } else {
        // removes the ingredient ID from the selected list if already there
        prev.splice(index, 1);
        console.log("ARRAY 2", [...prev])
        return [...prev];
      }
    });
  }
  console.log("SELECTED INGREDIENT ID", selectedIngredientId)
  console.log("DRINK INGREDIENTS", drinkIngredients)

  
  // for (const drinkIngredient of drinkIngredients) {
  //   console.log("FILTER", filter2(drinkIngredient, [43]))
  // }
  //filter return drinks that have the selected ingredients
  //compares the id of the drink.
  const filteredUserSelection = drinks.filter(drink => {
    console.log("DRINK", drink)
    return drinkIngredients.find((i) => i.drink_ingredient.find((j) => j.id === drink.id))
  });

  // const filteredUserSelection = drinkIngredients.filter(drink => { 
  //   console.log("DRINK", drink)
  //   const testDrink = drink.drink_ingredient.ingredient_id_list.every((v) => selectedIngredientId.includes(v))
  //   console.log("TEST DRINK", testDrink)
  //   return true
  //   // return drinkIngredients.find((i) => i.drink_ingredient.find((j) => j.id === drink.id))
  // });

  // if (selectedIngredientId.length > 0) {

  // }
  console.log('FILTER USER SELECTION', filteredUserSelection)


  //if a selection is not made yet. show all the ingredients. otherwise filter the ingredients and only return the ingredient. drinks that are created
  //if gin is selected previously and every other ingredients only shows related ingredients related to gin (drink)
  const ingredientFilter = selectedIngredientId.length === 0 ? ingredients : ingredients.filter(
    (ingredient) => drinkIngredients.find((i) => i.available_ingredient_list.includes(ingredient.id))
  );
  console.log('INGREDIENT FILTER', ingredientFilter)

  // const ingredientFilterTwo = selectedIngredientId.length === 0 ? ingredients : drinkIngredients.filter(
  //   (ingredient) => {
  //     console.log("INGREDIENT",ingredient)
  //     return true
  //   }
  // )

  //lists out all the ingredients as clickable buttons
  const ingredientsList = ingredientFilter.map(ingredient => {
    return (
      <button key={ingredient.id} onClick={() => handleIngredientSelect(ingredient.id)}>
        {ingredient.name}
      </button>
    )
  });

  //lists out the selected ingredients as clickable buttons
  const selectedIngredientsList = selectedIngredientId.map((ingredientId) => {
    const ingredient = ingredients.find((i) => i.id === ingredientId);
    return (
      <button key={ingredientId} onClick={() => handleIngredientSelect(ingredientId)}>
        {ingredient.name}
      </button>
    );
  });

  //lists out drinks available from the selected ingredients
  const availableDrinksList = filteredUserSelection.map((drink) => {
    return (
      <li key={drink.id}>
        {drink.name}
      </li>
    );
  });

  return (
    <div>

      <h2>Ingredients</h2>
      {ingredientsList}

      <h2>Selected Ingredients</h2>
      {selectedIngredientsList}

      <h2>Available Drinks</h2>
      <ul>
        {availableDrinksList}
      </ul>

    </div>
  );
}


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


