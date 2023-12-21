import { API_HOST } from '@/constans/api';
import { productsEndpoint, productIdEndpoint } from '@/constans/endpoints'
import Snackbar from '@/components/Snackbar';

class ProductAPI {

  getProducts = async (handlerLoader, handlerCards) => {
    const { endpoint, url, method } = productsEndpoint;
    let data;

    try {
      handlerLoader(true);

      const response = await fetch(`${API_HOST}${url}`, { method });
 
      data = await response.json();

      if(data && data?.length){
        handlerCards(data);
      }
    } catch (error) {
    
      console.log('getProducts => error', error);

    } finally {
      if (data && data?.length) {

        handlerLoader(false);

      } else {
        handlerLoader(true);

        setTimeout(() => {
          this.addSnackbar({
            message: {
              text: 'Something went wrong',
              type: 'body2',
              textColor: 'white',
              textWeight: '700'
            },
            variant: 'error',
            position: 'bottom-left',
            transition: 'up',
            startIcon: {
              iconName: 'sad2',
              size: '16',
              color: 'white',
              className: 'mx-6'
            }
          })
        }, 2000);
  
        setTimeout(() => {
          this.removeSnackbar();
        }, 6000); 
      }

      console.log('getProducts => finally', endpoint);
    }
  }

  addSnackbar = (snackbar) => {
    const $snackbar = new Snackbar(snackbar);
    const $snackbarsContainer = document.querySelector('.snackbar__container');

    if (document.body.contains($snackbarsContainer)) {
      $snackbarsContainer.appendChild($snackbar.snackbar);
    }

    return this;
  }

  removeSnackbar = () => {
    const $snackbarsContainer = document.querySelector('.snackbar__container');
    const $snackbar = document.body.querySelector('.snackbar');

    if ($snackbarsContainer.contains($snackbar)) {
      $snackbar.remove();
    }
  }

  getProductID = async (id, handlerLoader, handlerCards) => {

    const { endpoint, url, method } = productIdEndpoint(id);

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