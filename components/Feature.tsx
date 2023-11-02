import React from 'react'
import { product } from '@/data/product'
import Link from 'next/link'

export default function Feature() {
  return (
    <section className='bg-white'>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Products</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {product.map((product) => {
                    return (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-60 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm text-gray-700'>
                                        <Link href={product.href}>
                                            <span className='absolute inset-0'/>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                                </div>
                                <p className='text-sm font-medium text-gray-900'>{product.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
  )
}
