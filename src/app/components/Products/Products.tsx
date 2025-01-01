'use client'
import { useEffect, useState } from 'react'
import styles from './Products.module.css'
import axios from 'axios'
import { IProduct } from '@/app/types'
import { Product } from '../Product/Product'

interface IProductCategoryProps {
    category: string,
    listType: string
    gift: boolean
}

export const Products: React.FC<IProductCategoryProps> = ({ category, listType, gift }) => {
    const [products, setProduct] = useState<IProduct[]>([])

    useEffect(() => {
        const getMobiles = async () => {
            try {
                const response = await axios.get(`https://jsonserver.reactbd.com/${category}`)

                if (response.data) {
                    setProduct(response.data)
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getMobiles()
    }, [category])

    return (
        <>
            {
                products && <div className={listType === 'vertical' ? styles.productsContVert : styles.productsContHor}>
                    <ul className={listType === 'vertical' ? styles.productsUlVert : styles.productsUlHor}>
                        {
                            products.map((product) => <Product key={product._id} product={product} gift={gift} />)
                        }
                    </ul>
                </div>
            }
        </>
    )
}