interface SingleProductProps {
  params: { productId: string }
}

export default async function SingleProduct({ params }: SingleProductProps) {
  return <p>Single Product {params.productId}</p>
}
