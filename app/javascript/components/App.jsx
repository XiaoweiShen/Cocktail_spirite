import React from 'react';
import { Button } from '@mui/material';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import DrinksList from './DrinksList';

function App() {
  return (
    <div>
      <h1>My Drinks App</h1>
      <DrinksList />
    </div>
  );
}

export default App;
