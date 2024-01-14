import Observer from "@/services/Observer";
  
/**
 * @extends Observer
 */
class ProductState extends Observer {
 /** @type String */
  static EVENT_TYPE_PRODUCT_LOADING = 'EVENT_TYPE_PRODUCT_LOADING';
 /** @type String */
  static EVENT_TYPE_UPDATE_PRODUCT = 'EVENT_TYPE_UPDATE_PRODUCT';
  /** @type String */
  static EVENT_TYPE_UPDATE_PAGINATION = 'EVENT_TYPE_UPDATE_PAGINATION';
  /** @type ProductStateType */
  static INIT_STATE = {
    product: [],
    isLoadingProduct: false,
    pagination: {
      active: 1,
      amount: 5,
    },
  }

  /** @type ProductStateType */
  #state = ProductState.INIT_STATE;

  constructor() {
    super(ProductState.INIT_STATE)
  }

  /** @returns ProductStateType */
  get state() {
    return this.#state;
  }

  /**
  * @param { Boolean } loading
  * @returns this
  * */
  toggleLoaderProduct = (loading) => {
    this.#state.isLoadingProduct = loading;
    this.notificationObservers(ProductState.EVENT_TYPE_PRODUCT_LOADING);
    return this;
  }

  /**
  * @param { Product[] } products
  * @returns this
  * */
  updateProduct = (products) => {
    this.#state.product = products;
    this.notificationObservers(ProductState.EVENT_TYPE_UPDATE_PRODUCT);
    return this;
  }

  /**
  * @param { Number | Null ? } active
  * @param { Number | Null ? } amount
  * @returns this
  * */
  updatePagination = (active = null, amount = null) => {
    this.#state.pagination = {
      active: active ?? this.state.pagination.active,
      amount: amount ?? this.state.pagination.amount,
    };
    this.notificationObservers(ProductState.EVENT_TYPE_UPDATE_PAGINATION);
    return this;
  }

}

export default ProductState;

const prdState = new ProductState();

