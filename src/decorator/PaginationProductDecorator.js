import Pagination from "@/components/Pagination";
import ProductState from "@/states/ProductState";

/**
 * @extends Pagination
 */
class PaginationProductDecorator extends Pagination { 
  eventTypes = [ProductState.EVENT_TYPE_UPDATE_PAGINATION];
  displayName = 'PaginationProductDecorator';

  /**
  * @param { ProductStateType } newState
  * @param { ProductStateType } prevState
  * @param { String } eventType
  * */
  handleEvent = (newState, prevState, eventType) => {
    if (
      prevState.pagination.active !== newState.pagination.active
      && eventType === ProductState.EVENT_TYPE_UPDATE_PAGINATION
      ) {
      this.handleChangeActivePage(newState.pagination.active);
    }
  }

}

export default PaginationProductDecorator;