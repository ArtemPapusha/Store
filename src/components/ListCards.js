
import Loading from '@/components/Loading';
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

  addPagination = () => {
    const $pagination = new Pagination({
      count: 4,
      variant: 'outlined',
      color: 'black',
      size: 'medium'
    })
    document.body.appendChild($pagination.pagination);
    return this;
  }

  addSkeletonCards = (count) => {

  for (let i = 0; i < count; i++) {
    const $loading = new Loading();

    this.$listCards.appendChild($loading.loadingSkeleton);
    
  }
  
    return this;
  }

  removeSkeletonCards = () => {
   
    const skeletonElements = this.$listCards.querySelectorAll('.cardWrapperSkeleton');
    
    skeletonElements.forEach(element => {
      element.remove();
    });

    return this;
  };

 

  buildListCards = async () => {
    const $listCards = document.createElement('div');
    
    $listCards.classList.add('list-products');
   
     this.$listCards = $listCards;
  }
}

export default ListCards;