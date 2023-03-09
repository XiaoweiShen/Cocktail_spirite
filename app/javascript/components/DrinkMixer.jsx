import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

function DrinkMixer() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [matchingDrinks, setMatchingDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all ingredients from the server
  useEffect(() => {
    axios.get('/api/ingredients')
      .then(response => {
        setIngredients(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const ingredientId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedIngredients([...selectedIngredients, ingredientId]);
    } else {
      setSelectedIngredients(selectedIngredients.filter(id => id !== ingredientId));
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios.get('/api/drinks', {
      params: {
        ingredientIds: selectedIngredients,
      },
    })
      .then(response => {
        setMatchingDrinks(response.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Drink Mixer</h1>

      <form onSubmit={handleSubmit}>
        <p>What ingredients do you currently have?</p>

        {ingredients.map(ingredient => (
          <label key={ingredient.id}>
            <input type="checkbox" value={ingredient.id} onChange={handleCheckboxChange} />
            {ingredient.name}
          </label>
        ))}

        <button type="submit">Find matching drinks</button>
      </form>

      {loading && <p>Loading...</p>}

      {matchingDrinks.length === 0 && !loading && <p>No drinks match your selection.</p>}

      {matchingDrinks.length > 0 && (
        <div>
          <p>Matching drinks:</p>

          <ul>
            {matchingDrinks.map(drink => (
              <li key={drink.id}>
                <Link to={`/drinks/${drink.id}`}>{drink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DrinkMixer;