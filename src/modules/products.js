import '~/modules/products.scss';

import ListCards from '@/components/ListCards';
import ProductAPI from '@/services/ProductAPI';
import ProductState from '@/states/ProductState'
import Pagination from '@/decorator/PaginationProductDecorator';

const listCards = new ListCards();
const productState = new ProductState();
const productAPI = new ProductAPI(productState);
const pagination = new Pagination({
  elementsAmount: productState.state.pagination.elementsAmount,
  active: productState.state.pagination.active ?? 1,
});


productState.addObserver(pagination).addObserver(listCards);

pagination.setPageClick(async (page) => {
  listCards.productLoading();
  await productAPI.getProducts(page);

})

async function init() {
  await productAPI.getProducts(productState.state.pagination.active);

  document.body.appendChild(pagination.pagination);
}

await init();
