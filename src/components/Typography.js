class Typography {

  #type;
  #text;
  #color;
  #weight;
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
   *   textColor: 'primary' | 'primary-light' | 'primary-dark' | 'secondary' | 'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' | 'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' | 'info-light' | 'info-dark' | 'white' | 'black' ?,
   *   textWeight: '100' | '300' | '400' | '500' | '700' | '900' ?,
   * }} args
  */
  constructor({ text, type, textColor = 'black', textWeight }) {
    this.#text = text;
    this.#type = type;
    this.#color = textColor;
    this.#weight = textWeight;

    this.buildTypograpthyElement();
    return this;
  }

  buildTypograpthyElement = () => {
    const $typography = document.createElement(this.getElement());
    $typography.classList.add(`typography-${this.#type}`, `text-${this.#color}`, `font-weight--${this.#weight}`, 'typography');
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
