import '~/modules/index.scss';

import ListCards from '@/components/ListCards';
import ProductAPI from '@/services/ProductAPI';
import getAmountPage from '@/utils/getAmountPage';
import ProductState from '@/states/ProductState'
import Pagination from '@/decorator/PaginationProductDecorator';

const listCards = new ListCards();
const productAPI = new ProductAPI();
const productState = new ProductState();
const pagination = new Pagination({
  amount: productState.state.pagination.amount,
  active: productState.state.pagination.active,
});

productState.addObserver(pagination);

function listProductsLoader(show) {

  show ? listCards.addSkeletonCards(3) : listCards.removeSkeletonCards();
  
}

pagination.setPageClick(page => {
  productState.updatePagination(page)
})

function addCards(data) {
    data?.forEach(card => {
      listCards.addCard(card);
    });
}

async function fetchCards(page) {

  listCards.clearListCards();
  listCards.removeSkeletonCards();
 
  await productAPI.getProducts(listProductsLoader, addCards, page);

}

listCards.render();

fetchCards(1);



document.body.appendChild(pagination.pagination);
// listCards.addPagination({
//   amount: 5,
//   variant: 'text',
//   color: 'black',
//   handlePageClick
// });









