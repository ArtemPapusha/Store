import Button from '@/components/Button';
import Icon from './Icon';

class Pagination {
#$paginationContainer;
#$paginationItem;
#count;
#variant;
#color;
#size;

   /**
   * @param { PaginationDef } args
   */
  constructor({ count, variant = 'outlined', color, size }) {
    this.#count = count;
    this.#variant = variant;
    this.#color = color;
    this.#size = size;

    this.buildPagination();
     
  }

  get pagination() {
    return this.#$paginationContainer;
  }

  buildPagination = () => {
    const $paginationContainer = document.createElement('ul');
    $paginationContainer.className = `pagination_container d-flex just-content-center align-items-center gap-1`;
    

    $paginationContainer.appendChild(this.buildButtonFirstPage());
    $paginationContainer.appendChild(this.buildButtonPreviousPage());

    for (let i = 0; i < this.#count; i++) {
      const $paginationItemWrapper = document.createElement('li');

      const $paginationItem = document.createElement('button');
      $paginationItem.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size}`
      $paginationItem.setAttribute('id', 'page_' + (i+1).toString())
      $paginationItem.innerText = (i+1).toString();
      $paginationItemWrapper.appendChild($paginationItem);

      $paginationContainer.appendChild($paginationItemWrapper);
    }

    $paginationContainer.appendChild(this.buildButtonNextPage());
    $paginationContainer.appendChild(this.buildButtonLastPage());

    this.#$paginationContainer = $paginationContainer;
  }

  buildButtonFirstPage = () => {
    const $paginationItemWrapperToFirstPage = document.createElement('li');
    const $paginationItemToFirstPage = document.createElement('button');
    $paginationItemToFirstPage.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size}`;
    $paginationItemToFirstPage.setAttribute('id', 'pagination_first_page');
    const $iconToFirstPage = new Icon({
      iconName: 'first',
      size: '14',
      color: 'black',
      className: ''
    })
    $paginationItemToFirstPage.appendChild($iconToFirstPage.$icon);
    $paginationItemWrapperToFirstPage.appendChild($paginationItemToFirstPage);

    return $paginationItemWrapperToFirstPage;
  }

  buildButtonPreviousPage = () => {
    const $paginationItemWrapperToPreviousPage = document.createElement('li');
    const $paginationItemToPreviousPage = document.createElement('button');
    $paginationItemToPreviousPage.className = `pagination_item pagination_item--${this.#variant} bgc-${this.#color} br-${this.#color} pagination_item--${this.#size}`
    $paginationItemToPreviousPage.setAttribute('id', 'pagination_previous_page');
    const $iconToPreviousPage = new Icon({
      iconName: 'arrow-left',
      size: '14',
      color: 'black',
      className: ''
    })
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
    $paginationItemToLastPage.appendChild($iconToLastPage.$icon);
    $paginationItemWrapperToLastPage.appendChild($paginationItemToLastPage);

    return $paginationItemWrapperToLastPage
  }



}

export default Pagination;