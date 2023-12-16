class Loading {
$overlay = null;
  constructor() {
    this.$overlay = null;
    this.buildLoadingPage();
  }

  buildLoadingPage = () => {
    this.$overlay = document.createElement('div');
    this.$overlay.className = 'loading_overlay';

   const $loadingElement = document.createElement('div');
    $loadingElement.className = 'lds-dual-ring';
    this.$overlay.appendChild($loadingElement);
    document.body.appendChild(this.$overlay);
  }
}

export default Loading;