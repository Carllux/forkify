import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)
    console.log(id)

    if (!id) return;
    // rendering loading spinner
    recipeView.renderSpinner() 

    // loading recipe
    await model.loadRecipe(id);

    // rendering recipe
    recipeView.render(model.state.recipe)

  } catch (err) {
    throw err;
  }
}

const windowEvents = ['hashchange', 'load']

windowEvents.forEach(ev => window.addEventListener(ev, controlRecipes))
