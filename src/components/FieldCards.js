import CardProduct from "./CardProduct";

class FieldCards {
  #fieldCards;
 

   /**
   * @param {{
   *   cards: Array,
   * }} args
   */
  constructor( cards = [] ) {
    this.cards = cards;
   
    this.buildFieldCards();
    return this;
  }

  get fieldCards() {
    return this.#fieldCards;
  }

  render = () => {
    document.body.appendChild(this.#fieldCards);
  }

  buildFieldCards = () => {
    const $fieldCards = document.createElement('div');
    $fieldCards.classList.add('field-cards');

    this.cards.forEach((card) => {
      $fieldCards.appendChild(card.cardWrapper);
     });

     this.#fieldCards = $fieldCards;
  }
}

export default FieldCards;