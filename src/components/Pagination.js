import Icon from './Icon';

class Pagination {
  static DEFAULT_PAGE_COUNT = 5;

  #$paginationContainer;
  #amount;
  #activePage;
  #variant;
  #color;
  #textColor;
  #size;
  #handlePageClick;

   /**
   * @param { PaginationDef } args
   */
  constructor({ amount, active, variant = 'text', color, textColor = 'black', size }) {
    this.#amount = amount;
    this.#activePage = active;
    this.#variant = variant;
    this.#color = color;
    this.#textColor = textColor;
    this.#size = size;

    this.buildPagination();
  }

  get pagination() {
    return this.#$paginationContainer;
  }

  get activePage() {
    return this.#activePage;
  }
  
  set activePage(page) {
    this.#activePage = page;
  }

  setActivePage(page) {
    this.activePage = page;

    this.buildPagination();
  }

  setPageClick = (handlePageClick) => {
    this.#handlePageClick = handlePageClick;
  }

  handleChangeActivePage = (page) => {
    this.setActivePage(page);
  }
  
  handlePageClick = (page)  => {
    if (this.#handlePageClick) {
      this.#handlePageClick(page);
    }
  };

  #preBuildingPagination = () => {
    const items = [];

    items[0] =  {
      type: 'first',
      isDisabled: this.#activePage === 1,
    };
    items[1] =  {
      type: 'arrow-left',
      isDisabled: this.#activePage === 1,
    };

    if (this.#amount > Pagination.DEFAULT_PAGE_COUNT && this.#activePage > Pagination.DEFAULT_PAGE_COUNT) {
      items[(items.length - 1) + 1] =  {
          type: 'dots-left',
          isDisabled: true,
      };
    }

    if (this.#amount <= Pagination.DEFAULT_PAGE_COUNT) {
      for (let i = 1; i < this.#amount + 1; i++) {
          items[(items.length - 1) + 1] =  {
              type: 'item',
              value: i,
              isActive: this.#activePage === i,
          };
      }
    }

    if (this.#amount > Pagination.DEFAULT_PAGE_COUNT && this.#activePage <= Pagination.DEFAULT_PAGE_COUNT) {
      for (let i = 1; i < Pagination.DEFAULT_PAGE_COUNT + 1; i++) {
          items[(items.length - 1) + 1] =  {
              type: 'item',
              value: i,
              isActive: this.#activePage === i,
          };
      }
    }

    if (
      this.#amount > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage >= (this.#amount - Pagination.DEFAULT_PAGE_COUNT)
      ) {
      for (
          let i = this.#amount - Pagination.DEFAULT_PAGE_COUNT;
          i < this.#amount + 1;
          i++
      ) {
          items[(items.length - 1) + 1] =  {
              type: 'item',
              value: i,
              isActive: this.#activePage === i,
          };
      }
    }

    if (
      this.#amount > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage < (this.#amount - Pagination.DEFAULT_PAGE_COUNT)
      ) {
      for (
          let i = this.#activePage - Math.trunc(Pagination.DEFAULT_PAGE_COUNT / 2);
          i < this.#activePage + Math.trunc(Pagination.DEFAULT_PAGE_COUNT / 2) + 1;
          i++
      ) {
          items[(items.length - 1) + 1] = {
              type: 'item',
              value: i,
              isActive: this.#activePage === i,
          };
      }
    }
   
    if (this.#amount > Pagination.DEFAULT_PAGE_COUNT && this.#activePage < (this.#amount - Pagination.DEFAULT_PAGE_COUNT)) {
      items[(items.length - 1) + 1] = {
          type: 'dots-right',
          isDisabled: true,
      };
    }

    items[(items.length - 1) + 1] =  {
        type: 'arrow-right',
        isDisabled: this.#activePage === this.#amount,
    };

    items[(items.length - 1) + 1] =  {
      type: 'last',
      isDisabled: this.#activePage === this.#amount,
    };
    
    return items;
  }

  buildButtonElement = (icon) => {
    const $buttonElement = document.createElement('button');

    $buttonElement.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} text-${this.#textColor} pagination_item--${this.#size}`;

    const $iconPagination = new Icon({
      iconName: icon,
      size: '14',
      color: this.#textColor,
      className: ''
    })

    $buttonElement.appendChild($iconPagination.$icon);

    return $buttonElement;
  }

  buildPagination = () => {
    const $paginationContainer = this.#$paginationContainer || document.createElement('ul');
    $paginationContainer.innerHTML = '';
    
    $paginationContainer.className = `pagination_container d-flex just-content-center align-items-center gap-1`;

    this.#preBuildingPagination().forEach(item =>{
      const $item = document.createElement('li');

      if (item.type === 'first') {
        $item.appendChild(this.buildButtonFirstPage())
      }

      if (item.type === 'arrow-left') {
        $item.appendChild(this.buildButtonPreviousPage())
      }

      if (item.type === 'arrow-right') {
          $item.appendChild(this.buildButtonNextPage())
      }

      if (item.type === 'last') {
        $item.appendChild(this.buildButtonLastPage())
      }

      if (item.type === 'dots-left') {
          $item.innerText = '...';
      }

      if (item.type === 'dots-right') {
          $item.innerText = '...';
      }

      if (item.type === 'item') {
        const $paginationItem = this.buildButtonElement();

        $paginationItem.setAttribute('id', `page_${item.value}`);

        $paginationItem.addEventListener('click', () => this.handlePageClick(item.value));

        $paginationItem.innerText = item.value;

          $item.appendChild($paginationItem);
      }

      const $paginationItem = $item.querySelector('.pagination_item')
      if (item.type === 'item' && item.isActive) {
        if ($paginationItem) {
          $paginationItem.setAttribute('active', 'active')
          $paginationItem.classList.add('pagination_item--active')
        }
      }

      if (item.type !== 'item' && item.isDisabled) {
        if ($paginationItem) {
          $paginationItem.setAttribute('disabled', 'disabled');
          $paginationItem.classList.add('pagination_item--disabled')
        }
      }

      $paginationContainer.appendChild($item)
    })

    this.#$paginationContainer = $paginationContainer;
  }

  buildButtonFirstPage = () => {
    const $paginationItemToFirstPage = this.buildButtonElement('first');

    $paginationItemToFirstPage.setAttribute('id', 'pagination_first_page');

    $paginationItemToFirstPage.addEventListener('click', () => this.handlePageClick(1))

    return $paginationItemToFirstPage;
  }

  buildButtonPreviousPage = () => {
    const $paginationItemToPreviousPage = this.buildButtonElement('arrow-left');

    $paginationItemToPreviousPage.setAttribute('id', 'pagination_previous_page');

    $paginationItemToPreviousPage.addEventListener('click', () => {
    
      if (this.#activePage > 1) {
          this.handlePageClick(this.#activePage - 1);
      }
    });

    return $paginationItemToPreviousPage;
  }

  buildButtonNextPage = () => {
    const $paginationItemToNextPage = this.buildButtonElement('arrow-right');

    $paginationItemToNextPage.setAttribute('id', 'pagination_next_page');

    $paginationItemToNextPage.addEventListener('click', () => {

      if (this.#activePage < this.#amount) {
          this.handlePageClick(this.#activePage + 1);
      }
  });

    return $paginationItemToNextPage;
  }

  buildButtonLastPage = () => {
    const $paginationItemToLastPage = this.buildButtonElement('last');

    $paginationItemToLastPage.setAttribute('id', 'pagination_last_page');

    $paginationItemToLastPage.addEventListener('click', () => this.handlePageClick(this.#amount));

    return $paginationItemToLastPage
  }

}

export default Pagination;