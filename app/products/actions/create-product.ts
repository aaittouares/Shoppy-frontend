'use server'

import { revalidateTag } from 'next/cache'
import { getHeaders, post } from '../../common/util/fetch'
import { API_URL } from '../../common/constants/api'

export default async function createProduct(formData: FormData) {
  const response = await post('products', formData)
  const productImage = formData.get('image')
  if (productImage instanceof File && !response.error) {
    await uploadProductImage(response.data.id, productImage)
  }
  revalidateTag('products')
  return response
}

async function uploadProductImage(productId: number, file: File) {
  // checks if there is actually a file in the file input
  if (file.size > 0) {
    const formData = new FormData()
    formData.append('image', file)
    await fetch(`${API_URL}/products/${productId}/image`, {
      method: 'POST',
      headers: await getHeaders(),
      body: formData,
    })
  }
}
