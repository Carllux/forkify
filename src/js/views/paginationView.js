import View from "./View";
import icons from '../../img/icons.svg'

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(
            this._data.results.length / this._data.resultsPerPage
        );
        // console.log(numPages, 'Number of pages');
        // console.log(currentPage, 'Actuall page');


        // Page 1, and there are other pages
        if (currentPage === 1 && numPages > 1) {
            return `<button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> `
        }

        // Last page
        if (currentPage === numPages && numPages > 1) {
            return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`
        }

        // Other page
        if (currentPage < numPages) {
            return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> `
        }

        // Page 1, and there are NO other pages
        return ``
    }


    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            // e.preventDefault();
            const btn = e.target.closest('.btn--inline')
            if (!btn) return;

            const goToPage = +btn.dataset.goto
            console.log(goToPage, 'page to go');

            handler(goToPage);
        })
    }

    _generateMarkupButton() {

    }
}

export default new PaginationView();