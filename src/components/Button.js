import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

class Button {
  #$buttonElement;
  #className;
  #textContent;
  #variant;
  #buttonSize;
  #color;
  #disabled;
  #startIcon = null;
  #endIcon = null;
  #handleClick;

  /**
   * @param { ButtonDef } args
   */
  constructor({
    className = '',
    textContent = null,
    variant = 'contained',
    buttonSize = '',
    color = 'black',
    disabled = false,
    startIcon = null,
    endIcon = null,
    handleClick
  }) {
    this.#className = className;

    this.#textContent = textContent;

    if(textContent) {
      this.#textContent = new Typography(textContent);
    }

    this.#variant = variant;

    this.#buttonSize = buttonSize;

    this.#color = color;

    this.#disabled = disabled;
    
    if(startIcon) {
      this.#startIcon = new Icon(startIcon);
    }
    
    if(endIcon) {
      this.#endIcon = new Icon(endIcon);
    }

    this.#handleClick = handleClick;

    this.buildButton();
  }

  get $buttonElement() {
    return this.#$buttonElement;
  }

  buildButton = () => {
    const $button = document.createElement('button');

    $button.setAttribute('type', 'button');

    $button.addEventListener('click', this.#handleClick)
    
    if (this.#startIcon) {
      $button.appendChild(this.#startIcon.$icon);
    }

    if (this.#textContent) {
      $button.appendChild(this.#textContent.$textElement);
    }

    if (this.#endIcon) {
      $button.appendChild(this.#endIcon.$icon);
    }
    
    $button.className = `button d-flex just-content-center align-items-center flex-direction-row button-${this.#className} button-${this.#variant} button-${this.#buttonSize} bgc-${this.#color} br-${this.#color}`;

    if (this.#disabled) {
      $button.setAttribute('disabled', 'disabled');
      $button.classList.add('button-disabled');
    }

    this.#$buttonElement = $button;
  }

}

export default Button;