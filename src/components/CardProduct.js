import Button from '@/components/Button';

class CardProduct {

 /**
   * @param {{
   *   title: String,
   *   image: String,
   *   description: String,
   *   price: String,
   *   cartButton?: String,
   * }} args
  */
  constructor({ name = '', title = '', image = '', description = '', price = '' }) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.description = description;
    this.price = price;
    
    this.buildTitle();
    this.buildImage();
    this.buildDescription();
    this.buildPrice();
    this.cartButton = new Button(`${this.name}`, '');
    this.buildCardWrapper();

    return this;
  }

  set setcardWrapper(value) {
    this._cardWrapper = value;
  }

  get cardWrapper() {
    return this._cardWrapper;
  }

  set setTitle(value) {
    this._title = value;
  }

  get $title() {
    return this._title;
  }

  set setImage(value) {
    this._image = value;
  }

  get $image() {
    return this._image;
  }

  set setDescription(value) {
    this._description = value;
  }

  get $description() {
    return this._description;
  }

  set setPrice(value) {
    this._price = value;
  }

  get $price() {
    return this._price;
  }

  buildCardWrapper = () => {
    const $cardWrapper = document.createElement('div');
    $cardWrapper.classList.add('card-wrapper', `card-wrapper-${this.name}`, 'wd-200', 'py-6', 'px-6','gap-20', 'my-6', 'mx-6');

    $cardWrapper.addEventListener('mouseover', this.handleMouseOver);
    $cardWrapper.addEventListener('mouseleave', this.handleMouseLeave);

    $cardWrapper.appendChild(this._title);
    $cardWrapper.appendChild(this._image);

    const $footerCardProduct = document.createElement('div');
    $footerCardProduct.classList.add('footer-card-product', 'gap-40');
    $footerCardProduct.appendChild(this._price);
    $footerCardProduct.appendChild(this.cartButton.render());
    $cardWrapper.appendChild($footerCardProduct);
    $cardWrapper.appendChild(this._description);
    this.setcardWrapper = $cardWrapper;
  }

  buildTitle = () => {
    const $title = document.createElement('div');
    $title.classList.add('title', `title-${this.name}`, 'fs-20');
    $title.innerText = this.title;
    this.setTitle = $title;
  }

  buildImage = () => {
    const $image = document.createElement('img')
    $image.classList.add('img-cards', `img-${this.name}`);
    $image.setAttribute('src', `./images/${this.image}`)
    $image.setAttribute('alt', `${this.image}`)
    this.setImage = $image;
  }

  buildDescription = () => {
    const $description = document.createElement('div');
    $description.classList.add('description', `description-${this.name}`);
    $description.innerText = this.description;
    this.setDescription = $description;
  }

  buildPrice = () => {
    const $price = document.createElement('div');
    $price.classList.add('price', `price-${this.name}`, 'fs-18', 'py-4', 'px-4');
    $price.innerText = this.price;
    this.setPrice = $price;
  }

  /**
   * @param { Mouse Event } event
   */
  handleMouseOver = (event) => {
    this._description.style.display = 'block';
  };

    /**
   * @param { Mouse Event } event
   */
    handleMouseLeave = (event) => {
      this._description.style.display = 'none';
    };
}

export default CardProduct;