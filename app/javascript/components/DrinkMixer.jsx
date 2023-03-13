import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';

const DrinkMixer = () => {
  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    // fetch drinks, ingredients, and tags from the server
    // and set them to the corresponding state variables
    // ...
  }, []);

  const handleIngredientClick = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((i) => i !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a request to the server to get drinks that match
    // the selected ingredients and tags
    // ...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Select Ingredients:</Typography>
          </Grid>
          {ingredients.map((ingredient) => (
            <Grid item key={ingredient.id}>
              <Button variant="contained" onClick={() => handleIngredientClick(ingredient)}>
                {ingredient.name}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6">Select Tags:</Typography>
          </Grid>
          {tags.map((tag) => (
            <Grid item key={tag.id}>
              <Button variant="contained" onClick={() => handleTagClick(tag)}>
                {tag.name}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {drinks.length > 0 ? (
        <div>
          <Typography variant="h6">Matching Drinks:</Typography>
          {drinks.map((drink) => (
            <div key={drink.id}>
              <Typography>{drink.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="h6">
          No drinks match the selected ingredients and tags.
        </Typography>
      )}
    </div>
  );
};

export default DrinkMixer;
