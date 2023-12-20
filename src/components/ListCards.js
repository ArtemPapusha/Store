import Button from '@/components/Button';
import Loading from '@/components/Loading';
import CardProduct from "@/components/CardProduct";
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