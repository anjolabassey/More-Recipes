import express from 'express';

const router = express.Router();

global.recipes = [
  {
    id: 1,
    recipeName: 'Jollof Rice',
    recipeIngredients: 'tomatoes',
    recipeDirection: 'To make this dish, you need to have fresh..',
    recipeReviews: 'nice one',
    recipeUpvotes: 50
  },

  {
    id: 1,
    recipeName: 'Jollof Rice',
    recipeIngredients: 'rice, pepper, onions, seasoning, tomatoes',
    recipeDirection: 'To make this dish, you need to have fresh..',
    recipeReviews: 'nice one',
    recipeUpvotes: 12
  },

  {
    id: 2,
    recipeName: 'Stir Fry',
    recipeIngredients: 'pasta, chicken, ',
    recipeDirection: 'To make this dish, you need to have fresh..',
    recipeReviews: 'nice one',
    recipeUpvotes: 25
  },

  {
    id: 3,
    recipeName: 'Afang Soup',
    recipeQuantity: 2,
    recipeIngredients: 'stock fish, periwinkle',
    recipeDirection: 'To make this dish, you need to have fresh..'
  }

];


// add recipes
router.post('/', (request, response) => {
  if (!request.body.recipeQuantity) {
    return response.json({
      message: 'Please select quantity',
      error: true
    });
  }

  global.recipes.push(request.body);

  return response.json({
    message: 'Recipe is successfully created',
    error: false
  });
});

// modify recipe
router.put('/:recipeId', (request, response) => {
  for (let i = 0; i < global.recipes.length; i++) {
    if (global.recipes[i].id === parseInt(request.params.recipeId, 10)) {
      global.recipes[i].recipeName = request.body.recipeName;
      global.recipes[i].recipeIngredient = request.body.recipeIngredient;
      global.recipes[i].recipeDirection = request.body.recipeDirection;
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
router.delete('/:recipesId', (request, response) => {
  for (let i = 0; i < global.recipes.length; i++) {
    if (global.recipes[i].id === parseInt(request.params.recipeId, 10)) {
      global.recipes.splice[i];
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

module.exports = router;
