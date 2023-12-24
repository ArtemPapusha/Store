import ListCards from '@/components/ListCards';
import ProductAPI from '@/services/PoductAPI';
import CardProduct from "@/components/CardProduct";
const listCards = new ListCards();
const productAPI = new ProductAPI();

class Fetch {

  constructor() {
    
    listCards.render();

    listCards.addPagination();
  }

  listProductsLoader = (show) => {

    show ? listCards.addSkeletonCards(12) : listCards.removeSkeletonCards();
    
  }
  
  addCards = (data) => {
      data?.forEach(card => {
        listCards.addCard(card);
      });
  }

  fetchCards = async () => {
  
    await productAPI.getProducts(this.listProductsLoader, this.addCards);

    const $firstPage = document.getElementById('page_1');

  }

}

export default Fetch;