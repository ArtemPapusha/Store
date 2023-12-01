class FieldCards {


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

  set setFielsCards(value) {
    this._fieldCards = value;
  }

  get fieldCards() {
    return this._fieldCards;
  }

  render = () => {
    document.body.appendChild(this._fieldCards);
  }

  buildFieldCards = () => {
    const $fieldCards = document.createElement('div');
    $fieldCards.classList.add('field-cards');

   this.cards.forEach((card) => {
    $fieldCards.appendChild(card._cardWrapper);
   });

    this.setFielsCards = $fieldCards;
  }
}

export default FieldCards;