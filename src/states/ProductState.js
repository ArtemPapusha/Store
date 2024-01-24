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
   /** @type String */
   static EVENT_TYPE_UPDATE_INIT = 'EVENT_TYPE_UPDATE_INIT';
  /** @type ProductStateType */
  static INIT_STATE = {
    product: [],
    isLoadingProduct: false,
    isInitProduct: false,
    pagination: {
      active: 1,
      elementsAmount: 10,
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
  updateProduct = async (products) => {
    this.#state.product = products;
    console.log('products =>', products);
    this.notificationObservers(ProductState.EVENT_TYPE_UPDATE_PRODUCT);
    return this;
  }

  /**
  * @param { Number | Null ? } active
  * @param { Number | Null ? } elementsAmount
  * @returns this
  * */
  updatePagination = (active = null, elementsAmount = null) => {
    this.#state.pagination = {
      active: active ?? this.state.pagination.active,
      elementsAmount: elementsAmount ?? this.state.pagination.elementsAmount,
    };
    console.log('updatePagination => active =>', active);
    console.log('updatePagination => elementsAmount =>', elementsAmount);
    this.notificationObservers(ProductState.EVENT_TYPE_UPDATE_PAGINATION);
    return this;
  }

  setInitProduct = () => {
    if (!this.#state.isInitProduct) {
      this.#state.isInitProduct = true;
      this.notificationObservers(ProductState.EVENT_TYPE_UPDATE_INIT)
    }
  }
}

export default ProductState;

