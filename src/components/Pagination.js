import Icon from './Icon';
import Skeleton from '@/components/Skeleton';

class Pagination {
  static DEFAULT_PAGE_COUNT = 5;
  static PAGE_LIMIT_ELEMENTS = 10;

  #$paginationContainer;
  #elementsAmount;
  #activePage;
  #variant;
  #color;
  #textColor;
  #size;
  #handlePageClick;

   /**
   * @param { PaginationDef } args
   */
  constructor({ elementsAmount, active, variant = 'text', color, textColor = 'black', size }) {
    this.#elementsAmount = elementsAmount;
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
  
  set activePage(page) {
    this.#activePage = page;
  }

  set elementsAmountPage(elementsAmount){
    this.#elementsAmount = elementsAmount;
  }

  setPageClick = (handlePageClick) => {
    this.#handlePageClick = handlePageClick;
  }

  getPagesElementsAmount = () => {
    return Math.round(this.#elementsAmount / Pagination.PAGE_LIMIT_ELEMENTS)
  }

  handleChangeActivePage = (page, elementsAmount) => {
    this.activePage = page;
    this.elementsAmountPage = elementsAmount

    this.buildPagination();
  }

  setDisabled = () => {
    const $paginationItems = this.#$paginationContainer.querySelectorAll('.pagination_item');
  
    if ($paginationItems.length > 0) {
      $paginationItems.forEach(($paginationItem) => {
        $paginationItem.setAttribute('disabled', 'disabled');
        $paginationItem.classList.add('pagination_item--disabled');
      });
    }
  };

  handlePageClick = (page)  => {
    if (this.#handlePageClick) {
      this.#handlePageClick(page);
    }

  this.setDisabled();
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

    if (this.getPagesElementsAmount() > Pagination.DEFAULT_PAGE_COUNT && this.#activePage > Pagination.DEFAULT_PAGE_COUNT) {
      items[(items.length - 1) + 1] =  {
          type: 'dots-left',
          isDisabled: true,
      };
    }

    if (this.getPagesElementsAmount() <= Pagination.DEFAULT_PAGE_COUNT) {
      for (let i = 1; i < this.getPagesElementsAmount() + 1; i++) {
          items[(items.length - 1) + 1] =  {
              type: 'item',
              value: i,
              isActive: this.#activePage === i,
          };
      }
    }

    if (this.getPagesElementsAmount() > Pagination.DEFAULT_PAGE_COUNT && this.#activePage <= Pagination.DEFAULT_PAGE_COUNT) {
      for (let i = 1; i < Pagination.DEFAULT_PAGE_COUNT + 1; i++) {
          items[(items.length - 1) + 1] =  {
              type: 'item',
              value: i,
              isActive: this.#activePage === i,
          };
      }
    }

    if (
      this.getPagesElementsAmount() > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage >= (this.getPagesElementsAmount() - Pagination.DEFAULT_PAGE_COUNT)
      ) {
      for (
          let i = this.getPagesElementsAmount() - Pagination.DEFAULT_PAGE_COUNT;
          i < this.getPagesElementsAmount() + 1;
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
      this.getPagesElementsAmount() > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage > Pagination.DEFAULT_PAGE_COUNT
      && this.#activePage < (this.getPagesElementsAmount() - Pagination.DEFAULT_PAGE_COUNT)
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
   
    if (this.getPagesElementsAmount() > Pagination.DEFAULT_PAGE_COUNT && this.#activePage < (this.getPagesElementsAmount() - Pagination.DEFAULT_PAGE_COUNT)) {
      items[(items.length - 1) + 1] = {
          type: 'dots-right',
          isDisabled: true,
      };
    }

    items[(items.length - 1) + 1] =  {
        type: 'arrow-right',
        isDisabled: this.#activePage === this.getPagesElementsAmount(),
    };

    items[(items.length - 1) + 1] =  {
      type: 'last',
      isDisabled: this.#activePage === this.getPagesElementsAmount(),
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

  buildPaginationSkeleton = () => {
    new Skeleton().buildSkeletonPagination();
  }

  removePaginationSkeleton = () =>{
    const $skeletonPagination = document.querySelector('.pagination_container_skelton')
    if ($skeletonPagination) {
      $skeletonPagination.remove()
    }
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

      if (this.#activePage < this.getPagesElementsAmount()) {
          this.handlePageClick(this.#activePage + 1);
      }
  });

    return $paginationItemToNextPage;
  }

  buildButtonLastPage = () => {
    const $paginationItemToLastPage = this.buildButtonElement('last');

    $paginationItemToLastPage.setAttribute('id', 'pagination_last_page');

    $paginationItemToLastPage.addEventListener('click', () => this.handlePageClick(this.getPagesElementsAmount()));

    return $paginationItemToLastPage
  }

}

export default Pagination;