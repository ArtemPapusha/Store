class Typography {
  #type;
  #text;
  #color;
  #weight;
  #$textCell;

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
   * @param { TypographyDef } args
  */
  constructor({
    text = '',
    type = 'body1',
    textColor = 'black',
    textWeight = '400'
  }) {

    this.#text = text;
    this.#type = type;
    this.#color = textColor;
    this.#weight = textWeight;

    this.buildTypographyElement();
  }

  buildTypographyElement = () => {
    const $typography = document.createElement(this.getElement());

    $typography.className = `typography-${this.#type} text-${this.#color} font-weight--${this.#weight} typography`;

    $typography.innerText = this.#text;
    
    this.#$textCell = $typography;
  }

  getElement = () =>  Typography.types[this.#type] || 'span';

  get $textElement() {
    return this.#$textCell;
  };
  
}

export default Typography;
