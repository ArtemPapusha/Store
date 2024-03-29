class Skeleton {
  
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

    $cardWrapperSkeleton.className = `card_wrapper_skeleton d-flex just-content-flex-start flex-direction-column align-items-center align-self-flex-start wd-20 py-3 px-3 gap-10 my-3 mx-3`;

    $cardWrapperSkeleton.appendChild(this.buildSkeletonTitle());
   
    $cardWrapperSkeleton.appendChild(this.buildSkeletonImage());

    const $footerCardProductSkeleton = document.createElement('div');

    $footerCardProductSkeleton.className = 'footer_card_product_skeleton d-flex just-content-space-between align-items-center gap-15'

    const $priceSkeleton = document.createElement('div');

    $priceSkeleton.className = `price_skeleton skeleton`;

    $footerCardProductSkeleton.appendChild($priceSkeleton);

    $footerCardProductSkeleton.appendChild(this.buildSkeletonButton());

    $footerCardProductSkeleton.appendChild(this.buildSkeletonButton());
    
    $cardWrapperSkeleton.appendChild($footerCardProductSkeleton);

    this.$cardWrapperSkeleton = $cardWrapperSkeleton;
  }

  buildSkeletonTitle = () => {
    const $titleSkeleton = document.createElement('div');

    $titleSkeleton.className = `title_skeleton wd-100p`;

    for (let i = 0; i < 3; i++) {
    const $titleSkeletonElement = document.createElement('div');

    $titleSkeletonElement.className = `title_skeleton_element wd-100p skeleton`;

    $titleSkeleton.appendChild($titleSkeletonElement);
  }

  return $titleSkeleton;
  }

  buildSkeletonImage = () => {
    const $imageSkeleton = document.createElement('div');

    $imageSkeleton.className = `image_skeleton wd-100p skeleton`;

    return $imageSkeleton;
  }

  buildSkeletonButton = () => {
    const $buttonSkeleton = document.createElement('div');

    $buttonSkeleton.className = `button_skeleton skeleton`;

    return $buttonSkeleton;
  }
}

export default Skeleton;