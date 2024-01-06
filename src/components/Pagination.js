import Icon from './Icon';

class Pagination {
#currentPage = 1;
#$paginationContainer;
#count;
#variant;
#color;
#size;
#handlePageClick;

   /**
   * @param { PaginationDef } args
   */
  constructor({ count, variant = 'outlined', color, size, handlePageClick }) {
    this.#count = count;
    this.#variant = variant;
    this.#color = color;
    this.#size = size;
    this.#handlePageClick = handlePageClick;

    this.buildPagination();
  }

  get pagination() {
    return this.#$paginationContainer;
  }

  handlePageClick = (page) => {
    this.#currentPage = page;

    const $paginationItems = this.#$paginationContainer.querySelectorAll('.pagination_item');

    const $clickedPaginationItem = this.#$paginationContainer.querySelector(`#page_${page}`);

    $paginationItems.forEach(item => {
        item.classList.remove('pagination_item--active');
    });

    $clickedPaginationItem.classList.add('pagination_item--active');
   
    this.#handlePageClick(page);
};

  buildPagination = () => {
    const $paginationContainer = document.createElement('ul');
    
    $paginationContainer.className = `pagination_container d-flex just-content-center align-items-center gap-1`;
    
    $paginationContainer.appendChild(this.buildButtonFirstPage());
    $paginationContainer.appendChild(this.buildButtonPreviousPage());

    for (let i = 0; i < this.#count; i++) {

      const $paginationItemWrapper = document.createElement('li');

      const $paginationItem = document.createElement('button');

      $paginationItem.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size}`;

      $paginationItem.setAttribute('id', 'page_' + (i+1).toString());

      $paginationItem.innerText = (i+1).toString();

      $paginationItem.addEventListener('click', () => this.handlePageClick(i + 1));

      $paginationItemWrapper.appendChild($paginationItem);

      $paginationContainer.appendChild($paginationItemWrapper);
    }

    $paginationContainer.appendChild(this.buildButtonNextPage());
    $paginationContainer.appendChild(this.buildButtonLastPage());

    const $firstPaginationItem = $paginationContainer.querySelector(`#page_1`);

    if ($firstPaginationItem) {
        $firstPaginationItem.classList.add('pagination_item--active');
    }

    this.#$paginationContainer = $paginationContainer;
  }

  buildButtonFirstPage = () => {
    const $paginationItemWrapperToFirstPage = document.createElement('li');

    const $paginationItemToFirstPage = document.createElement('button');

    $paginationItemToFirstPage.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size} pagination_item--disabled`;

    $paginationItemToFirstPage.setAttribute('id', 'pagination_first_page');
    $paginationItemToFirstPage.setAttribute('disabled', 'disabled');

    const $iconToFirstPage = new Icon({
      iconName: 'first',
      size: '14',
      color: 'black',
      className: ''
    })

    $paginationItemToFirstPage.addEventListener('click', () => this.handlePageClick(1))

    $paginationItemToFirstPage.appendChild($iconToFirstPage.$icon);
    $paginationItemWrapperToFirstPage.appendChild($paginationItemToFirstPage);

    return $paginationItemWrapperToFirstPage;
  }

  buildButtonPreviousPage = () => {
    const $paginationItemWrapperToPreviousPage = document.createElement('li');

    const $paginationItemToPreviousPage = document.createElement('button');

    $paginationItemToPreviousPage.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size} pagination_item--disabled`;

    $paginationItemToPreviousPage.setAttribute('id', 'pagination_previous_page');
    $paginationItemToPreviousPage.setAttribute('disabled', 'disabled');

    const $iconToPreviousPage = new Icon({
      iconName: 'arrow-left',
      size: '14',
      color: 'black',
      className: ''
    })

    $paginationItemToPreviousPage.addEventListener('click', () => {
      const currentPage = this.getCurrentPage();
      if (currentPage > 1) {
          this.handlePageClick(currentPage - 1);
      }
  });

    $paginationItemToPreviousPage.appendChild($iconToPreviousPage.$icon);
    $paginationItemWrapperToPreviousPage.appendChild($paginationItemToPreviousPage);

    return $paginationItemWrapperToPreviousPage;
  }

  buildButtonNextPage = () => {
    const $paginationItemWrapperToNextPage = document.createElement('li');

    const $paginationItemToNextPage = document.createElement('button');

    $paginationItemToNextPage.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size}`;

    $paginationItemToNextPage.setAttribute('id', 'pagination_next_page');

    const $iconToNextPage = new Icon({
      iconName: 'arrow-right',
      size: '14',
      color: 'black',
      className: ''
    })

    $paginationItemToNextPage.addEventListener('click', () => {

      const currentPage = this.getCurrentPage();

      if (currentPage < this.#count) {
          this.handlePageClick(currentPage + 1);
      }
  });

    $paginationItemToNextPage.appendChild($iconToNextPage.$icon);
    $paginationItemWrapperToNextPage.appendChild($paginationItemToNextPage);

    return $paginationItemWrapperToNextPage;
  }

  buildButtonLastPage = () => {
    const $paginationItemWrapperToLastPage = document.createElement('li');

    const $paginationItemToLastPage = document.createElement('button');

    $paginationItemToLastPage.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size}`;

    $paginationItemToLastPage.setAttribute('id', 'pagination_last_page');

    const $iconToLastPage = new Icon({
      iconName: 'last',
      size: '14',
      color: 'black',
      className: ''
    })

    $paginationItemToLastPage.addEventListener('click', () => this.handlePageClick(this.#count));

    $paginationItemToLastPage.appendChild($iconToLastPage.$icon);
    $paginationItemWrapperToLastPage.appendChild($paginationItemToLastPage);

    return $paginationItemWrapperToLastPage
  }

  getCurrentPage = () => {
    return this.#currentPage;
  }

}

export default Pagination;