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
    }) {
    this.#name = name;

    if(title) {
      this.#title = new Typography({
        text: title,
        type: 'h6',
      })
    }

    this.#image = image;
 
    if(description) {
      this.#description = new Typography({
        text: description,
        type: 'body2'
      })
    }
  
    if(price) {
      this.#price = new Typography({
        text: price + ` грн`,
        type: 'caption'
      })
    }
    
    this.buildTitle();
    this.buildImage();
    this.buildDescription();
    this.buildPrice();

    this.#buttonFavorite = new Button({
      className: name,
      textContent: {
        type: 'button'
      },
      variant: 'outlined',
      buttonSize: 'medium',
      color: 'secondary-light',
      disabled: false,
      startIcon: {
        iconName: 'heart',
        size: '14',
        color: "secondary-light",
      }
    })

    this.#buttonCart = new Button({
      className: name,
      textContent: {
        type: 'button'
      },
      variant: 'outlined',
      buttonSize: 'medium',
      color: 'secondary-light',
      disabled: false,
      startIcon: {
        iconName: 'cart',
        size: '14',
        color: "black",
      }
    })

    this.buildCardWrapper();

  }

  get $cardWrapper() {
    return this.#$cardWrapper;
  }

  buildCardWrapper = () => {
    const $cardWrapper = document.createElement('div');

    $cardWrapper.className = `card-wrapper d-flex flex-direction-column just-content-flex-start align-items-center flex-wrap-wrap card-wrapper--${this.#name} wd-20 py-3 px-3 gap-10 my-3 mx-3`;

    $cardWrapper.appendChild(this.#title);
    $cardWrapper.appendChild(this.#image);

    const $footerCardProduct = document.createElement('div');

    $footerCardProduct.className = 'card-product__footer d-flex flex-direction-row just-content-space-between align-items-center gap-10';
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
    $image.setAttribute('alt', `${this.#name}`);
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

    $price.className = `card-product__price card-product__price--${this.#name} py-2 px-2`;

    if (this.#price) {
      $price.appendChild(this.#price.$textElement);
    }

    this.#price = $price;
  }

}

export default CardProduct;