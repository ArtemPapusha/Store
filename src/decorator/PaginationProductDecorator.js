import Pagination from "@/components/Pagination";
import ProductState from "@/states/ProductState";

/**
 * @extends Pagination
 */
class PaginationProductDecorator extends Pagination { 
  eventTypes = [
    ProductState.EVENT_TYPE_UPDATE_PAGINATION,
    ProductState.EVENT_TYPE_PRODUCT_LOADING,
    ProductState.EVENT_TYPE_UPDATE_INIT,
  ];
  displayName = 'PaginationProductDecorator';

  /**
  * @param { ProductStateType } newState
  * @param { ProductStateType } prevState
  * @param { String } eventType
  * */
  handleEvent = (newState, prevState, eventType) => {
    if (!newState.isInitProduct && newState.isLoadingProduct && !prevState.isLoadingProduct) {
      this.buildPaginationSkeleton();
    }
    
    if (!newState.isLoadingProduct) {
      this.removePaginationSkeleton();
    }

    if (
      eventType === ProductState.EVENT_TYPE_UPDATE_PAGINATION &&
      newState.isInitProduct ||
      eventType === ProductState.EVENT_TYPE_UPDATE_INIT
    ) {
      const activePage = prevState.pagination.active !== newState.pagination.active 
        ? newState.pagination.active 
        : prevState.pagination.active;

      const elementsAmount = prevState.pagination.elementsAmount !== newState.pagination.elementsAmount 
        ? newState.pagination.elementsAmount 
        : prevState.pagination.elementsAmount;
      this.handleChangeActivePage(activePage, elementsAmount);
  
    }
  }

}

export default PaginationProductDecorator;