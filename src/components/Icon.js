class Icon {
  #icon;

   /**
     * @param {{
     *   iconName: String ?,
     *   size: '12' | '14' | '16' | '18' | '24' | '26' ?,
     *   color: 'primary' | 'primary-light' | 'primary-dark' | 'secondary' | 'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' | 'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' | 'info-light' | 'info-dark' ?,
     *   className: String ?,
     * }} args
   */
  constructor({ iconName = 'heart', size = '16', color = 'primary', className = '' }) {

    this.iconName = iconName;
    this.size = size;
    this.color = color;
    this.className = className;

    this.buildIcon();
    return this;
  }

  get icon() {
    return this.#icon;
  }

  buildIcon = () => {
    const $icon = document.createElement('i');
 
    $icon.classList.add('icon', `icon-${this.iconName}`, `text-${this.color}`, `fs-${this.size}`);

    if (this.className?.length) {
      $icon.classList.add(this.className);
    }

    this.#icon = $icon;
  };


}

export default Icon;