import Skeleton from '@/components/Skeleton';
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";
import ProductAPI from '@/services/PoductAPI';

class ListCards {
  $listCards;

  constructor() {
    this.buildListCards();
  }

  get listCards() {
    return this.$listCards;
  }

  render = () => {
    document.body.appendChild(this.$listCards);
  }

 /**
   * @param { CardDef } card
  */
  addCard = (card) => {
    const $card = new CardProduct(card);

    this.$listCards.appendChild($card.$cardWrapper);

    return this;
  }

  clearCards = () => {
    this.$listCards.innerHTML = '';
  }

  addPagination = (pagination) => {
    const $pagination = new Pagination(pagination)

    document.body.appendChild($pagination.pagination);

    return this;
  }

  paginationDisabled = () => {
    const $paginationItems = document.querySelectorAll('.pagination_item');

    $paginationItems.forEach(item => {

      item.setAttribute('disabled', 'disabled');

      item.classList.add('pagination_item--disabled');
    });

    return this;
  }

  endPaginationDisabled = async () => {
    const $paginationItems = document.querySelectorAll('.pagination_item');

    $paginationItems.forEach(item => {

      item.removeAttribute('disabled')

      item.classList.remove('pagination_item--disabled');
    });

    const firstPage = document.querySelector('#page_1');
    const paginationFirstPage = document.getElementById('pagination_first_page');
    const paginationPreviousPage = document.getElementById('pagination_previous_page');
    
    if (firstPage && firstPage.classList.contains('pagination_item--active')) {
      paginationFirstPage.setAttribute('disabled', 'disabled');
      paginationFirstPage.classList.add('pagination_item--disabled');
      paginationPreviousPage.setAttribute('disabled', 'disabled');
      paginationPreviousPage.classList.add('pagination_item--disabled');
    }

    const productAPI = new ProductAPI();
    const totalPageCount = await productAPI.getLastPage();
    const lastPage = document.querySelector(`#page_${totalPageCount}`);
    const paginationLastPage = document.getElementById('pagination_last_page');
    const paginationNextPage = document.getElementById('pagination_next_page');
        
    if (lastPage && lastPage.classList.contains('pagination_item--active')) {
      paginationLastPage.setAttribute('disabled', 'disabled');
      paginationLastPage.classList.add('pagination_item--disabled');
      paginationNextPage.setAttribute('disabled', 'disabled');
      paginationNextPage.classList.add('pagination_item--disabled');
    }
    
    return this;
  }

  addSkeletonCards = (count) => {

  for (let i = 0; i < count; i++) {

    const $skeleton = new Skeleton();

    this.$listCards.appendChild($skeleton.loadingSkeleton); 
  }

    return this;
  }

  removeSkeletonCards = () => {
   
    const skeletonElements = this.$listCards.querySelectorAll('.card_wrapper_skeleton');
    
    skeletonElements.forEach(element => {

      element.remove();
    });

    return this;
  };

  buildListCards = async () => {
    const $listCards = document.createElement('div');
    
    $listCards.className = 'list-products d-flex flex-direction-row just-content-center flex-wrap-wrap';
   
     this.$listCards = $listCards;
  }
}

export default ListCards;