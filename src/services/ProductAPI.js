import { API_HOST } from '@/constans/api';
import endpoint from '@/utils/endpoint'
import { PRODUCTS_ROUTER, PRODUCT_ID_ROUTER, API_METHOD_GET, API_METHOD_POST } from '@/constans/api'
import Snackbar from '@/components/Snackbar';
import getAmountPage from '@/utils/getAmountPage'

class ProductAPI {
  static productsEndpoint = () => endpoint(API_METHOD_GET, PRODUCTS_ROUTER);

  static productIdEndpoint = (id) => endpoint(API_METHOD_GET, PRODUCT_ID_ROUTER(id));

  getProducts = async (handlerLoader, handlerCards, page) => {
    const { endpoint, url, method } = ProductAPI.productsEndpoint();
    let data;

    try {
      handlerLoader(true);

      const response = await fetch(`${API_HOST}${url}?_page=${page}&_limit=3`, { method });

      const amountPage = getAmountPage(response);

      data = await response.json();

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