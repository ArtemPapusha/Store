import ListCards from "./ListCards";

class Loading {
$cardWrapperSkeleton = null;

  constructor() {

    this.$cardWrapperSkeleton = null;

    this.buildSkeletonProduct();
  }

  get loadingSkeleton () {
    return this.$cardWrapperSkeleton;
  }

  buildSkeletonProduct = () => {
    
    const $cardWrapperSkeleton = document.createElement('div');

    $cardWrapperSkeleton.className = `cardWrapperSkeleton wd-200 py-6 px-6 gap-20 my-6 mx-6`;

    const $titleSkeleton = document.createElement('div');

    $titleSkeleton.className = `titleSkeleton`;

    for (let i = 0; i < 3; i++) {
    const $titleSkeletonElement = document.createElement('div');

    $titleSkeletonElement.className = `titleSkeletonElement skeleton`;

    $titleSkeleton.appendChild($titleSkeletonElement);
  }

    $cardWrapperSkeleton.appendChild($titleSkeleton);

    const $imageSkeleton = document.createElement('div');

    $imageSkeleton.className = `imageSkeleton skeleton`;
   
    $cardWrapperSkeleton.appendChild($imageSkeleton);

    const $footerCardProductSkeleton = document.createElement('div');

    $footerCardProductSkeleton.classList.add('footerCardProductSkeleton', 'gap-30');

    const $priceSkeleton = document.createElement('div');

    $priceSkeleton.className = `priceSkeleton skeleton`;

    const $buttonSkeleton = document.createElement('div');

    $buttonSkeleton.className = `buttonSkeleton skeleton`;


    $footerCardProductSkeleton.appendChild($priceSkeleton);

  
    $footerCardProductSkeleton.appendChild($buttonSkeleton);
    

    $cardWrapperSkeleton.appendChild($footerCardProductSkeleton);

    this.$cardWrapperSkeleton = $cardWrapperSkeleton;

  }
}

export default Loading;