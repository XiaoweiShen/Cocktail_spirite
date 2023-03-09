import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default () => {
    const [drink, setDrink] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/drinks/${id}`)
            .then(response => {
                setDrink(response.data);
                setIngredients(response.data.ingredients);
            })
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div>
            {drink && (
                <div>
                    <h1>{drink.name}</h1>
                    <img src={drink.image} alt={drink.name} />
                    <p>{drink.instruction}</p>
                    <p>Tags: {drink.tags}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li key={ingredient.id}>
                                {ingredient.name} - 
                                <img src={ingredient.image_s} alt={ingredient.name} />
                                {ingredient.measure}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
