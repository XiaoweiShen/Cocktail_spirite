import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function DrinksList() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('/drinks.json')
      .then(response => response.json())
      .then(data => setDrinks(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {drinks.map(drink => (
          <Grid item xs={12} md={4} key={drink.id}>
            <Card>
              <CardMedia component="img" height="200" image={drink.image_url} />
              <CardContent>
                <Typography variant="h5" component="h2">{drink.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DrinksList;
