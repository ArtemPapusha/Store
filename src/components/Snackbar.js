import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import Button from '@/components/Button';

class Snackbar {
  #$snackbar;
  static #$snackbarsContainer = null;
  #message;
  #variant;
  #position;
  #transition;
  #startIcon = null;
  #endIcon = null;
  #button = null;

  /**
  * @param { SnackbarDef } args
  */
  constructor({
    message = null,
    variant = 'default',
    position = 'bottom-left',
    transition = 'up',
    startIcon = null,
    endIcon = null,
    button = null
  }) {
    if(message) {
      this.#message = new Typography(message);
    };

    this.#variant = variant;
    this.#position = position;
    this.#transition = transition;

    if(startIcon) {
      this.#startIcon = new Icon(startIcon);
    }

    if(endIcon) {
      this.#endIcon = new Icon(endIcon);
    }

    if(button) {
      this.#button = new Button(button);
    }

    this.buildSnackbar();
  }

  get snackbar() {
    return this.#$snackbar;
  }

  get snackbarsContainer() {
    return Snackbar.#$snackbarsContainer;
  }

  buildSnackbar = () => {
    if (!Snackbar.#$snackbarsContainer) {
      const $snackbarsContainer = document.createElement('div');
      $snackbarsContainer.className = `snackbar__container snackbar__container--${this.#position} gap-6`;
      document.body.appendChild($snackbarsContainer);
      Snackbar.#$snackbarsContainer = $snackbarsContainer;
    }
  
    const $snackbarBody = document.createElement('div');
    $snackbarBody.className = `snackbar snackbar--${this.#variant} snackbar--${this.#transition}`;

    if (this.#startIcon) {
      $snackbarBody.appendChild(this.#startIcon.$icon);
    }

    if (this.#message) {
      $snackbarBody.appendChild(this.#message.$textElement);
    }

    if (this.#endIcon) {
      $snackbarBody.appendChild(this.#endIcon.$icon);
    }

    if (this.#button) {
      $snackbarBody.appendChild(this.#button.$buttonElement);
    }


    this.#$snackbar = $snackbarBody;

  }

}

export default Snackbar;