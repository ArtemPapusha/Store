import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

class Button {
  #$buttonElement;
  #className;
  #textContent
  #variant
  #buttonSize;
  #color
  #disabled
  #startIcon = null;
  #endIcon = null;

  /**
   * @param { ButtonDef } args
   */
  constructor({ className = '', textContent = null, variant = 'contained', buttonSize = 'medium', color = 'danger', disabled = false, startIcon = null, endIcon = null }) {
    this.#className = className;
    this.type = 'button';
    this.#textContent = textContent;

    if(textContent) {
      this.#textContent = new Typography(textContent);
    };

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

    this.buildButton();
  }

  get $buttonElement() {
    return this.#$buttonElement;
  }

  buildButton = () => {
    const $button = document.createElement('button');

    $button.setAttribute('type', this.type);

    $button.setAttribute('disabled', 'disabled');
  
    const $text = document.createElement('span');
    $text.innerText = `${this.text}`;
    
    if (this.#startIcon) {
      $button.appendChild(this.#startIcon.$icon);
    }

    if (this.#textContent) {
      $button.appendChild(this.#textContent.$textElement);
    }

    if (this.#endIcon) {
      $button.appendChild(this.#endIcon.$icon);
    }
    
    $button.classList.add('button', `button-${this.#className}`);

    $button.classList.add(this.#variant);

    $button.classList.add(this.#buttonSize);


    $button.classList.add(`bgc-${this.#color}`);

    $button.classList.add(`br-${this.#color}`);


    if (this.#disabled) {
      $button.setAttribute('disabled', 'disabled');
      $button.classList.add('disabled');
    }

    this.#$buttonElement = $button;
  }
}

export default Button;