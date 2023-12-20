import { API_HOST } from '@/constans/api';
import { productsEndpoint, productIdEndpoint } from '@/constans/endpoints'

class ProductAPI {

  getProducts = async (handlerLoader, handlerCards) => {
    const { endpoint, url, method } = productsEndpoint;

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

  getProductID = async (id) => {

    const { endpoint, url, method } = productIdEndpoint(id);

    try {

      const response = await fetch(`${API_HOST}${url}`, { method });
 
      const data = await response.json();

      if(data && data?.length){
        handlerCards(data);
      }
      
    } catch (error) {

      console.log('getProducts => error', error);

    } finally {

      console.log('getProducts => finally', endpoint);

    }
  }
}

export default ProductAPI;