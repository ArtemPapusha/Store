import Button from '@/components/Button';
import Loading from '@/components/Loading';
import CardProduct from "@/components/CardProduct";

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

 

  buildListCards = () => {
    const $listCards = document.createElement('div');
    $listCards.classList.add('field-cards');

    const $loading = new Loading();
    $listCards.appendChild($loading.loading);

     this.$listCards = $listCards;
  }
}

export default ListCards;