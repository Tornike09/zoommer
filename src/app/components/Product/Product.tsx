'use client'
import { IProduct } from "@/app/types"
import Image from "next/image"
import styles from './Product.module.css'
import arrowImage from '../../../../images/compare-card.svg'
import cartButton from '../../../../images/cart-button.svg'
import { useDispatch } from "react-redux"
import { addToCart } from "../../../../redux/slices/cartSlice/cartSlice"
import giftIcon from '../../../../images/gift.png'

interface IMobileProps {
    product: IProduct
    gift: boolean
}

export const Product: React.FC<IMobileProps> = ({ product, gift }) => {
    const dispatch = useDispatch()
    const handleProductToCart = (product: IProduct) => {
        dispatch(addToCart(product))
    }
    return (
        <li className={styles.mobileItem}>
            {
                gift && <div className={styles.giftIcon}>
                    <div className={styles.giftIcon}>
                        <Image src={giftIcon} alt="" />
                    </div>
                </div>
            }
            <div className={styles.imageCont} style={{ backgroundImage: `url(${product.image})` }}></div>
            <div>
                <h4>
                    <span>{product.price} ₾</span>
                    <span className={styles.prevPrice}>{product.previousPrice} ₾</span>
                </h4>
                <p>{product.title}</p>
            </div>
            <div className={styles.cartButtons}>
                <button>
                    <Image src={arrowImage} alt="" />
                </button>
                <button className={styles.addToCart} onClick={() => handleProductToCart(product)}>
                    <Image src={cartButton} alt="" />
                    <span>დაამატე</span>
                </button>
            </div>
        </li>
    )
}