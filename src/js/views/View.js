import icons from '../../img/icons.svg'
export default class View {
  _parentElement = document.querySelector('.recipe')
  _data;
  // _errorMessage = "We couldn't find that recipe. Please try another one."
  // _message = ''

  renderMessage(message = this._errorMessage) {
    // console.log('Error')

    const markup = `
  <div class="error">
  <div>
    <svg>
      <use href="${icons}}#icon-alert-triangle"></use>
    </svg>
  </div>
  <p>${message}</p>
  </div>
  `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }



  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderMessage();

    this._data = data;
    const markup = this._generateMarkup()
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
    // this.#parentElement.innerHTML = '';
  }

}