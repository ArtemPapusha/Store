import endpoint from '@/utils/endpoint'
import { PRODUCTS_ROUTER, PRODUCT_ID_ROUTER, API_METHOD_GET, API_METHOD_POST } from '@/constans/api'


export const productsEndpoint = endpoint(API_METHOD_GET, PRODUCTS_ROUTER)
export const productIdEndpoint = (id) => endpoint(API_METHOD_GET, PRODUCT_ID_ROUTER(id))