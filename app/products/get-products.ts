// no need to add 'use server' cause the get used here is only called inside a server component
// (also if the component is only displaying a list of products without interaction, it should of course be a server component)
// also server ACTION are used for action or mutation context, else it's a server FUNCTION.

import { get } from '@/app/common/util/fetch'
import { Product } from './interfaces/product.interface'

export default async function getProducts() {
  return get<Product[]>(
    'products',
    ['products'],
    new URLSearchParams({ status: 'available' })
  )
}
