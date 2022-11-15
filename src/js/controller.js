// import { render } from 'sass';
import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');

// console.log(icons)


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)
    console.log(id)

    if (!id) return;
    recipeView.renderSpinner()

    // loading recipe
    await model.loadRecipe(id);

    // const recipe = model.state.recipe
    // rendering recipe
    recipeView.render(model.state.recipe)


  } catch (err) {
    throw err;
  }
}

const windowEvents = ['hashchange', 'load']
// console.log(windowEvents)

windowEvents.forEach(ev => window.addEventListener(ev, controlRecipes))
