import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import Snackbar from '@/components/Snackbar';

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
  #handler = null;

  /**
   * @param { ButtonDef } args
   */
  constructor({
    className = '',
    textContent = null,
    variant = 'contained',
    buttonSize = 'medium',
    color = 'danger',
    disabled = false,
    startIcon = null,
    endIcon = null,
    handler = ''
  }) {
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

    this.#handler = handler;

    this.buildButton();
    this.buttonHandlers();
  }

  get $buttonElement() {
    return this.#$buttonElement;
  }

  buildButton = () => {
    const $button = document.createElement('button');

    $button.setAttribute('type', this.type);
  
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

  buttonHandlers = async () => {
    if (this.#handler === 'cart') {
      this.#$buttonElement.addEventListener('click', () => {
        this.addSnackbar({
          message: {
            text: 'Added to cart!',
            type: 'body2',
            textColor: 'white',
            textWeight: '700'
          },
          variant: 'default',
          position: 'bottom-left',
          transition: 'up',
          startIcon: {
            iconName: 'checkbox-checked',
            size: '16',
            color: 'white',
            className: 'mx-6'
          }
        })

        setTimeout(() => {
          this.removeSnackbar();
        }, 4000); 
      });
    } 
  }

  addSnackbar = (snackbar) => {
    const $snackbar = new Snackbar(snackbar);
    const $snackbarsContainer = document.querySelector('.snackbar__container');

    if (document.body.contains($snackbarsContainer)) {
      $snackbarsContainer.appendChild($snackbar.snackbar);
    }

    return this;
  }

  removeSnackbar = () => {
    const $snackbarsContainer = document.querySelector('.snackbar__container');
    const $snackbar = document.body.querySelector('.snackbar');
    
    if ($snackbarsContainer.contains($snackbar)) {
      $snackbar.remove();
    }

    return this;
  }
}

export default Button;