import { API_HOST } from '@/constans/api';
import endpoint from '@/utils/endpoint'
import { PRODUCTS_ROUTER, PRODUCT_ID_ROUTER, API_METHOD_GET, API_METHOD_POST } from '@/constans/api'
import Snackbar from '@/components/Snackbar';

class ProductAPI {
  static productsEndpoint = () => endpoint(API_METHOD_GET, PRODUCTS_ROUTER);

  static productIdEndpoint = (id) => endpoint(API_METHOD_GET, PRODUCT_ID_ROUTER(id));

  /** @type ProductStateInstantsType */
  #productState;

  /**
   * @param { ProductStateInstantsType } productState 
   */
  constructor(productState) {
    this.#productState = productState;
  }


  /**
   * @param { String } page
   * @returns {Promise<void>}
   */
  getProducts = async (page) => {
    const { endpoint, url, method } = ProductAPI.productsEndpoint();
    const { 
      state,
      toggleLoaderProduct,
      updateProduct,
      updatePagination,
      setInitProduct
    } = this.#productState

    toggleLoaderProduct(true);

    try {
      const response = await fetch(`${API_HOST}${url}?_page=${page}`, { method });

      /** @type ProductsResponse */
      const { data, items } = await response.json();
      updateProduct(data)
      updatePagination(page, items)
    } catch (error) {
    
      console.log('getProducts => error', error);

    } finally {
      if (!state.isInitProduct) {
        setInitProduct();
      }

      toggleLoaderProduct(false);

      console.log('getProducts => finally', endpoint);
    }
  }

  getProductID = async (id, handlerLoader, handlerCards) => {

    const { endpoint, url, method } = ProductAPI.productIdEndpoint(id);

    try {
      
      handlerLoader(true);

      const response = await fetch(`${API_HOST}${url}`, { method });
 
      const data = await response.json();

      if(data && data?.length){
        handlerCards(data);
      }
      
    } catch (error) {

      console.log('getProducts => error', error);

    } finally {
      handlerLoader(false);

      console.log('getProducts => finally', endpoint);

    }
  }

}

export default ProductAPI;