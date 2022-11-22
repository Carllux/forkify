import icons from '../../img/icons.svg'
import View from './View';
import { fraction } from 'fractional'

// console.log(icons)
// src\img
class RecipeView extends View {
  _parentElement = document.querySelector('.recipe')
  _errorMessage = "We couldn't find that recipe. Please try another one."
  _message = ''


  _generateMarkupIngredients(ing) {
    return ` <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity) : ''}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit ? ing.unit : ''}</span>
          ${ing.description}
        </div>
      </li>`
  }

  addHandlerRender(handler) {
    const windowEvents = ['hashchange', 'load']
    windowEvents.forEach(ev => window.addEventListener(ev, handler))
  }

}

export default new RecipeView() 