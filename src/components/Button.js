import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

class Button {
  buttonElement;
  startIcon = null;
  endIcon = null;

 /**
   * @param {{
   *   className: String,
   *   textContent: Typography ?,
   *   variant: 'text' | 'contained' | 'outlined' ?,
   *   size: 'small' | 'medium' | 'large' ?,
   *   color: 'primary' | 'primary-light' | 'primary-dark' | 'secondary' | 'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' | 'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' | 'info-light' | 'info-dark' ?,
   *   disabled: Boolean ?,
   *   startIcon: Icon ?,
   *   endIcon: Icon ?,
   * }} args
 */
  constructor({ className = '', textContent = null, variant = 'contained', size = 'medium', color = 'warning', disabled = false, startIcon = null, endIcon = null }) {
    this.className = className;
    this.type = 'button';
    this.textContent = textContent;

    if(textContent) {
      this.textContent = new Typography(textContent);
    };

    this.variant = variant;
    this.size = size;
    this.color = color;
    this.disabled = disabled;
    
    
    if(startIcon) {
      this.startIcon = new Icon(startIcon);
    }
    if(endIcon) {
      this.endIcon = new Icon(endIcon);
    }

    this.buildButton();
  }

  get buttonElement() {
    return this.buttonElement;
  }

  buildButton = () => {
    const $button = document.createElement('button');

    // $button.addEventListener('click', this.handleClick);

    $button.setAttribute('type', this.type);
    if (this.disabled) {
      $button.setAttribute('disabled', 'disabled');
    }

    const $text = document.createElement('span');
    $text.innerText = `${this.text}`;
    
    if (this.startIcon) {
      $button.appendChild(this.startIcon.icon);
    }

    if (this.textContent) {
      $button.appendChild(this.textContent.textElement);
    }

    if (this.endIcon) {
      $button.appendChild(this.endIcon.icon);
    }
    
    $button.classList.add('button', `button-${this.className}`);

    if (this.variant?.length) {
      $button.classList.add(this.variant);
    }

    if (this.size?.length) {
      $button.classList.add(this.size);
    }

    if (this.color?.length) {
      $button.classList.add(`bgc-${this.color}`);
    }

    if (this.color?.length) {
      $button.classList.add(`br-${this.color}`);
    }

    if (this.disabled) {
      $button.setAttribute('disabled', 'disabled');
      $button.classList.add('disabled');
    }

    this.buttonElement = $button;
  }

  // handleClick = () => {

  // }

  render = () => {
    return this.buttonElement;
  }
}

export default Button;