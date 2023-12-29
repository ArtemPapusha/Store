import Skeleton from '@/components/Skeleton';
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";

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

      item.setAttribute('disabled', 'disabled')

      item.classList.add('pagination_item--disabled');
    });

    return this;
  }

  endPaginationDisabled = () => {
    const $paginationItems = document.querySelectorAll('.pagination_item');

    $paginationItems.forEach(item => {

      item.removeAttribute('disabled')

      item.classList.remove('pagination_item--disabled');
    });

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