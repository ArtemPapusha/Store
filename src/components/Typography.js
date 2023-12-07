class Typography {

  #type;
  #text;
  #$element;

  // static titleElemnts = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  static types = {
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    button: 'span',
    caption: 'span',
    overline: 'span'
  }
 /**
   * @param {{
   *   text: String ?,
   *   type: 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'button' | 'caption' | 'overline' ?,
   * }} args
  */
  constructor({ text, type }) {
    this.#type = type;
    this.#text = text;

    this.buildTypograpthyElement();
    return this;
  }

  buildTypograpthyElement = () => {
    const $typography = document.createElement(this.getElement());
    $typography.classList.add('typography', `typography-${this.#type}`);
    $typography.innerText = this.#text;
    this.#$element = $typography;
  }

  getElement = () => {
    // if (this.#type === 'subtitle1' || this.#type === 'subtitle2' || this.#type === 'body1' || this.#type === 'body2') {
    //   return 'p';
    // } 

    // if (Typography.titleElemnts.includes(this.#type)) {
    //   return this.#type;
    // }

    return Typography.types[this.#type] || 'span';

  };

  get textElement() {
    return this.#$element;
  };
  
}

export default Typography;