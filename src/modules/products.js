import '~/modules/products.scss';

import ListCards from '@/components/ListCards';
import ProductAPI from '@/services/ProductAPI';
import ProductState from '@/states/ProductState'
import Pagination from '@/decorator/PaginationProductDecorator';
import CardProduct from '@/decorator/CardProductDecorator';

const listCards = new ListCards();
const productState = new ProductState();
const productAPI = new ProductAPI(productState);
const pagination = new Pagination({
  elementsAmount: productState.state.pagination.elementsAmount,
  active: productState.state.pagination.active ?? 1,
});


productState.addObserver(pagination);

pagination.setPageClick(async (page) => {
  await productAPI.getProducts(page);
  listCards.listCards.innerHTML = '';
  const productData = productState.state.product;
  productData.forEach(product => {
    const cardProduct = new CardProduct(product);
    listCards.listCards.appendChild(cardProduct.$cardWrapper);
  })
})

async function init() {
  await productAPI.getProducts(productState.state.pagination.active);
  listCards.listCards.innerHTML = '';
  const productData = productState.state.product;
  productData.forEach(product => {
    const cardProduct = new CardProduct(product);
    listCards.listCards.appendChild(cardProduct.$cardWrapper);
  })

  document.body.appendChild(pagination.pagination);
}

await init();
