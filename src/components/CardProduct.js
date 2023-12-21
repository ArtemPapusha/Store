import Button from '@/components/Button';
import Typography from '@/components/Typography';


class CardProduct {
  #name;
  #title = null;
  #image;
  #description = null;
  #price = null;
  #buttonCart = null;
  #buttonFavorite = null;
  #$cardWrapper;
  
 /**
   * @param { CardDef } args
  */
  constructor({
      name = '',
      title = null,
      image = '',
      description = null,
      price = null,
      buttonFavorite = null,
      buttonCart = null
    }) {
    this.#name = name;

    if(title) {
      this.#title = new Typography(title);
    };

    this.#image = image;
 
    if(description) {
      this.#description = new Typography(description);
    };
  
    if(price) {
      this.#price = new Typography(price);
    };
    
    this.buildTitle();
    this.buildImage();
    this.buildDescription();
    this.buildPrice();

    if(buttonFavorite) {
      this.#buttonFavorite = new Button(buttonFavorite);
    }
   
    if(buttonCart) {
      this.#buttonCart = new Button(buttonCart);
    }

    this.buildCardWrapper();

  }

  get $cardWrapper() {
    return this.#$cardWrapper;
  }

  buildCardWrapper = () => {
    const $cardWrapper = document.createElement('div');

    $cardWrapper.className = `card-wrapper card-wrapper--${this.#name} wd-200 py-6 px-6 gap-20 my-6 mx-6`;

    $cardWrapper.appendChild(this.#title);
    $cardWrapper.appendChild(this.#image);

    const $footerCardProduct = document.createElement('div');

    $footerCardProduct.classList.add('card-product__footer', 'gap-20');
    $footerCardProduct.appendChild(this.#price);

    if (this.#buttonFavorite) {
      $footerCardProduct.appendChild(this.#buttonFavorite.$buttonElement);
    }

    if (this.#buttonCart) {
      $footerCardProduct.appendChild(this.#buttonCart.$buttonElement);
    }

    $cardWrapper.appendChild($footerCardProduct);
    $cardWrapper.appendChild(this.#description);

    this.#$cardWrapper = $cardWrapper;
  }

  buildTitle = () => {
    const $title = document.createElement('div');

    $title.className = `card-product__title card-product__title--${this.#name}`;

    if (this.#title) {
      $title.appendChild(this.#title.$textElement);
    }
    

    this.#title = $title;
  }

  buildImage = () => {
    const $imgWrapper = document.createElement('div');
    $imgWrapper.className = `card-product__img`;

    const $image = document.createElement('img');

    $image.className = `card-product__img card-product__img--${this.#name}`;
    $image.setAttribute('src', `${this.#image}`);
    $image.setAttribute('alt', `${this.#image}`);
    $imgWrapper.appendChild($image);

    this.#image = $imgWrapper;
  }

  buildDescription = () => {
    const $description = document.createElement('div');

    $description.className = `card-product__description card-product__description--${this.#name}`;
  
    if (this.#description) {
      $description.appendChild(this.#description.$textElement);
    }

    this.#description = $description;
  }

  buildPrice = () => {
    const $price = document.createElement('div');

    $price.className = `card-product__price card-product__price--${this.#name} fs-18 py-4 px-4`;

    if (this.#price) {
      $price.appendChild(this.#price.$textElement);
    }

    this.#price = $price;
  }

}

export default CardProduct;