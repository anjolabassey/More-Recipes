import express from 'express';

const router = express.Router();

global.recipes = [
  {
    id: 1,
    name: 'Jollof Rice',
    ingredients: 'tomatoes',
    directions: 'To make this dish, you need to have fresh..',
    reviews: 'nice one',
    upvotes: 50
  },

  {
    id: 2,
    name: 'Jollof Rice',
    ingredients: 'rice, pepper, onions, seasoning',
    directions: 'To make this dish, you need to have fresh..',
    reviews: 'nice one',
    upvotes: 12
  },

  {
    id: 3,
    name: 'Stir Fry',
    ingredients: 'pasta, chicken, ',
    directions: 'To make this dish, you need to have fresh..',
    reviews: 'nice one',
    upvotes: 25
  },

];


// add recipes
router.post('/', (request, response) => {


  global.recipes.push(request.body);

  return response.json({
    message: 'Recipe is successfully created',
    error: false
  });
});

// modify recipe
router.put('/:recipesid', (request, response) => {
  for (let i = 0; i < global.recipes.length; i += 1) {
    if (global.recipes[i].id === parseInt(request.params.id, 10)) {
      global.recipes[i].name = request.body.name;
      global.recipes[i].ingredients = request.body.ingredients;
      global.recipes[i].directions = request.body.directions;
      return response.json({
        message: 'recipe is successfully edited',
        error: false
      });
    }
  }
  // If recipe id is not found
  return response.status(404).json({
    message: 'Recipe not found.',
    error: true
  });
});

// delete recipes
router.delete('/:recipesid', (request, response) => {
  for (let i = 0; i < global.recipes.length; i += 1) {
    if (global.recipes[i].id === parseInt(request.params.recipeid, 10)) {
      global.recipes.splice(i, 1);
      return response.json({
        message: 'Recipe was sussesfully deleted',
        error: false
      });
    }
  }
  // If recipe id is not found
  return response.status(404).json({
    message: 'Recipe not found.',
    error: true
  });
});

// get recipes
router.get('/', (request, response) => {
  return response.json({
    recipes: global.recipes,
    error: false
  });
});

// Add review
// Get just recipe with most upvotes

export default router;
