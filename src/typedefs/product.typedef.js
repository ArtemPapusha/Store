
  /**
  * @typedef {{
  *   id: Number,
  *   name: String,
  *   title: String,
  *   image: String,
  *   description: String,
  *   price: Number,
  * }} Product
  */

  /**
   * @typedef {{ 
   *  data: Product[],
   *  first: Number,
   *  prev: Number,
   *  next: Number,
   *  last: Number,
   *  ages: Number,
   *  items: Number,
   *  }} ProductsResponse
   */
  
  /**
  * @typedef {{
  *   product: Product[],
  *   isLoadingProduct: Boolean,
  *   isInitProduct: Boolean,
  *   pagination: {
  *       active: Number,
  *       amount: Number,
  *   }
  * }} ProductStateType
  */


  /**
  * @typedef {{
  *   state: ProductStateType,
  *   toggleLoaderProduct: (loading: Boolean) => void,
  *   updateProduct: (product: Product[]) => void,
  *   updatePagination: (ative: Number | Null ?, amount: Number | Null ?) => void,
  *   setInitProduct: () => void,
  * }} ProductStateInstantsType
  */