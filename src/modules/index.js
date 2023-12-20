import '~/modules/index.scss';

import ListCards from '@/components/ListCards';
import ProductAPI from '@/services/PoductAPI';
import Loading from '@/components/Loading';


const loading = new Loading()
const listCards = new ListCards();
const productAPI = new ProductAPI();


function listProductsLoader(show) {

  show ? listCards.addSkeletonCards(12) : listCards.removeSkeletonCards();
  
}

function addCards(data) {
    data?.forEach(card => {
      listCards.addCard(card);
    });
}



async function fetchCards() {

  await productAPI.getProducts(listProductsLoader, addCards);

}

listCards.render();

fetchCards();

