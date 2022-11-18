export default class View {
    #parentElement = document.querySelector('.recipe')
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup()
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    }


    renderSpinner() {
        const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`
        this.#clear();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup)
        // this.#parentElement.innerHTML = '';
    }

}