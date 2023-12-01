class Button {
  constructor(name = '', value = '') {
    this.name = name;
    this.value = value;
    this.type = 'button';

    this.buildButton();
    return this;
  }

  get $button() {
    return this._button
  }

  buildButton = () => {
    const $button = document.createElement('button');
    $button.setAttribute('type', 'button');
    $button.setAttribute('value', this.value);
    const $text = document.createElement('span');
    $button.appendChild($text);
    $text.innerText = `${this.value}`;
    $button.classList.add('button', `button-${this.name}`, 'py-4');
    const $icon = document.createElement('i');
    $icon.classList.add('icon', 'icon-cart', 'mr-6', 'fs-18');
    $button.insertBefore($icon, $text);
    this._button = $button;
  }

  render = () => {
    return this._button;
  }
}

export default Button;