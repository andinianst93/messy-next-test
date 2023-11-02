import React from 'react'
import { product } from '@/data/product'
import Link from 'next/link'
interface Product {
  id: string
  name: string
  imageAlt: string
  imageSrc: any
  price: string
  color: string
  href: string
}
export default function SingleProductPage({ params }: { params: {id: string} }) {
  // find the product with matching id
  const selectedProduct = product.find((p) => p.id === parseInt(params.id, 10));
  // handle if the product is not found
  if(!selectedProduct)
  {
    return <div className='text-base font-medium text-center'>Product not found</div>;
  }

  // display the product
  return (
    <div className="bg-white">
      <div className='mt-8 mx-16 bg-blue-700 text-white rounded px-2 py-1 w-fit text-sm hover:underline'>
        <Link href={'/'}>Go Back Home</Link>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li key={selectedProduct.id}>
                  <div className="flex items-center text-sm">
                    <a href={selectedProduct.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {selectedProduct.name}
                    </a>
                  </div>
                </li>
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{selectedProduct.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">{selectedProduct.price}</p>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{selectedProduct.description}</p>
            </div>
          </section>
        </div>

      {/* Product image */}
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <img src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} className="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>
  </div>
  )
}


export async function generateStaticParams() {
  return product.map((product) => ({
    id: product.id.toString(),
  }))
}