import Button from '@/components/Button';
import CardProduct from "@/components/CardProduct";

class ListCards {
  #listCards;

  constructor() {

    this.buildListCards();
  }

  get fieldCards() {
    return this.#listCards;
  }

  render = () => {
    document.body.appendChild(this.#listCards);
  }
 /**
   * @param { CardDef } card
  */
  addCard = (card) => {
    const $card = new CardProduct(card);
    this.#listCards.appendChild($card.$cardWrapper);
    return this;
  }

  buildListCards = () => {
    const $fieldCards = document.createElement('div');
    $fieldCards.classList.add('field-cards');

     this.#listCards = $fieldCards;
  }
}

export default ListCards;