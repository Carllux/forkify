import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)
    // console.log(id)

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

const controlSearchResults = async function () {
  try {
// get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults(query);

    // render results
    console.log(model.state.search.results)

    

  } catch (error) {
    console.log(error);
  }
};



const init = function () {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
}

init()