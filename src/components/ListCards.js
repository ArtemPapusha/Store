import Skeleton from '@/components/Skeleton';
import CardProduct from "@/components/CardProduct";
import ProductState from "@/states/ProductState";




class ListCards {
  $listCards;

  eventTypes = [
    ProductState.EVENT_TYPE_UPDATE_PRODUCT,
    ProductState.EVENT_TYPE_PRODUCT_LOADING,
    ProductState.EVENT_TYPE_UPDATE_INIT,
  ];

  displayName = 'ListCards';

  constructor() {
    this.buildListCards();
  }

  get listCards() {
    return this.$listCards;
  }

  productLoading = () => {
    this.$listCards.innerHTML = '';
    const skeleton = new Skeleton();
    const skeletonProduct = skeleton.buildSkeletonProduct(10)
    this.$listCards.appendChild(skeletonProduct)
  }

  handleEvent = (newState, prevState, eventType) => {
   
    if (!newState.isInitProduct && newState.isLoadingProduct && !prevState.isLoadingProduct) {
      this.productLoading();
    }

    if (
      eventType === ProductState.EVENT_TYPE_UPDATE_PRODUCT &&
      newState.isInitProduct ||
      eventType === ProductState.EVENT_TYPE_UPDATE_INIT
    ) {
      console.log('ListCards => products', newState.product.length);

      this.$listCards.innerHTML = '';

      const productData = newState.product;

      productData.forEach(product => {
        const cardProduct = new CardProduct(product);
        this.$listCards.appendChild(cardProduct.$cardWrapper);
      })
    }

  }

  buildListCards = () => {
    const $listCards = document.createElement('div');
    
    $listCards.className = 'list-products d-flex flex-direction-row just-content-center flex-wrap-wrap';
   
     this.$listCards = $listCards;

     document.body.appendChild(this.$listCards);
  }
}

export default ListCards;