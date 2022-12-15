import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

if (module.hot) {
  module.hot.accept();
}

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
  // testing
  // controlServings();

}

const controlSearchResults = async function () {
  try {
    console.log(resultsView)
    resultsView.renderSpinner()

    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults(query);


    // render results
    console.log(model.state.search.results)
    // resultsView.render(model.state.search.results)
    resultsView.render(model.getSearchResultsPage())

    // Render initial pagination buttons
    paginationView.render(model.state.search)

  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  // resultsView.render(model.state.search.results)
  resultsView.render(model.getSearchResultsPage(goToPage))

  // Render initial pagination buttons
  paginationView.render(model.state.search)
}

const controlServings = function () {
  // update the recipe servings(in state)
  model.updateServings(4)
  // update the recipe view
  recipeView.render(model.state.recipe)

}

const init = function () {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
}

init()
