'use client'

import Link from 'next/link'
import React from 'react'
import "./styles.css"

export interface Category {
    category: string
    image: string
    title: string
}
export interface CategoriesSectionProps {
    title: string
    baseHref: string
    categories: Category[]
    cta: { text: string; href: string }
}

export default function CategoriesSection({
    title,

    categories,
    cta,
}: CategoriesSectionProps) {
    return (
        <div className="container mx-auto px-6">
            <h2 className="section-title text-center">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-x-6 gap-y-8 border-b-2 border-white pb-8">
                {categories.map((c) => (
                    <>
                        <div className="mt-2.5 bg-grey-500 rounded-2xl p-4 flex flex-col items-center justify-center h-48 hgap-4 cursor-pointer hover:shadow-2xl scale-110 transition-all duration-300 ease-in-out">
                            <div className="rounded-full p-2">
                                <img src={c.image} className='rounded-full h-32 w-32 object-cover shadow-2xl'/>
                            </div>
                            <h4 className="font-semibold text-gray-700 select-none">{c.title}</h4>
                        </div>
                    </>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link
                    href={cta.href}
                    className="text-brand hover:text-brand-secondary font-semibold text-lg"
                >
                    {cta.text} <i className="fas fa-arrow-right ml-1"></i>
                </Link>
            </div>
        </div>
    )
}