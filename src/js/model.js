import { API_URL, RES_PER_PAGE } from './config'
import { getJSON } from './helpers'


export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
    servings: 0
  }
}

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`)

    // console.log(await getJSON(`${API_URL}/${id}`))
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    // console.log(state.recipe);
  } catch (err) {
    console.warn(err)
  }

};

export const loadSearchResults = async function (query) {
  try {

    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`)

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url
      }
    })

  } catch (error) {
    // console.error()
    throw error;
  }
}


export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end)
}

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ingredient => {
    ingredient.quantity = (ingredient.quantity * newServings) / state.recipe.servings;
    // newQTD =  oldQT * newServings / oldServings // 2 * 8 / 4 = 4
  })
  state.recipe.servings = newServings;
  // console.log(newServings)
}
// loadSearchResults('pizza')