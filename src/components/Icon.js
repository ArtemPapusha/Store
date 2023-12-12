class Icon {
  #icon;
  #iconName;
  #size;
  #color;
  #className;

 /**
    * @param { IconDef } args
  */
  constructor({
    iconName = 'heart',
    size = '16',
    color = 'primary',
    className = ''
  }) {

    this.#iconName = iconName;
    this.#size = size;
    this.#color = color;
    this.#className = className;

    this.buildIcon();
  }

  get $icon() {
    return this.#icon;
  }

  buildIcon = () => {
    const $icon = document.createElement('i');
 
    $icon.classList.add('icon', `icon-${this.#iconName}`, `text-${this.#color}`, `fs-${this.#size}`);

    if (this.className?.length) {
      $icon.classList.add(this.#className);
    }

    this.#icon = $icon;
  };


}

export default Icon;