import Skeleton from '@/components/Skeleton';
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";
import ProductAPI from '@/services/ProductAPI';
import getAmountPage from '@/utils/getAmountPage';

class ListCards {
  $listCards;

  constructor() {
    this.buildListCards();
  }

  get listCards() {
    return this.$listCards;
  }

  buildListCards = () => {
    const $listCards = document.createElement('div');
    
    $listCards.className = 'list-products d-flex flex-direction-row just-content-center flex-wrap-wrap';
   
     this.$listCards = $listCards;

     document.body.appendChild(this.$listCards);
  }
}

export default ListCards;