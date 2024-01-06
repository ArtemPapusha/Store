import '~/modules/index.scss';

import ListCards from '@/components/ListCards';
import ProductAPI from '@/services/PoductAPI';

const listCards = new ListCards();
const productAPI = new ProductAPI();


function listProductsLoader(show) {

  show ? listCards.addSkeletonCards(3) && listCards.paginationDisabled() : listCards.removeSkeletonCards() && listCards.endPaginationDisabled();
  
}

function addCards(data) {
    data?.forEach(card => {
      listCards.addCard(card);
    });
}

async function fetchCards(page) {

  listCards.clearCards();
  listCards.removeSkeletonCards();
 
  await productAPI.getProducts(listProductsLoader, addCards, page);

}

listCards.render();

fetchCards(1);

const totalPageCount = await productAPI.getLastPage();

listCards.addPagination({
  count: totalPageCount,
  variant: 'outlined',
  color: 'black',
  size: 'medium',
  handlePageClick: (page) => fetchCards(page)
});




