import ProductState from "@/states/ProductState";
import CardProduct from "@/components/CardProduct";

/**
 * @extends CardProduct
 */
class CardProductDecorator extends CardProduct {
  eventTypes = [
    ProductState.EVENT_TYPE_UPDATE_PRODUCT,
    ProductState.EVENT_TYPE_PRODUCT_LOADING,
    ProductState.EVENT_TYPE_UPDATE_INIT,
  ];

  displayName = 'CardProductDecorator';

  handleEvent = (newState, prevState, eventType) => {
    if (!newState.isInitProduct && newState.isLoadingProduct && !prevState.isLoadingProduct) {
      this.buildSkeletonProduct();
    }
    
    if (!newState.isLoadingProduct) {
      this.removeSkeletonProduct();
    }

    if (
      eventType === ProductState.EVENT_TYPE_UPDATE_PRODUCT &&
      newState.isInitProduct ||
      eventType === ProductState.EVENT_TYPE_UPDATE_INIT
    ) {
      console.log(newState.product);
    }

  }


}

export default CardProductDecorator;