class Loading {
$overlay = null;
  constructor() {
    this.$overlay = null;
    this.buildLoadingPage();
  }

  get loading () {
    return this.$overlay;
  }

  buildLoadingPage = () => {
    this.$overlay = document.createElement('div');
    this.$overlay.className = 'loading_overlay';

   const $loadingElement = document.createElement('div');
    $loadingElement.className = 'lds-dual-ring';
    this.$overlay.appendChild($loadingElement);
  }
}

export default Loading;