'use client'
import { IProduct } from "@/app/types"
import styles from './CartItem.module.css'
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { decrementQty, incrementQty, removeFromCart } from "../../../../redux/slices/cartSlice/cartSlice"

interface ICartItemProps {
    cartItem: IProduct
}

export const CartItem: React.FC<ICartItemProps> = ({ cartItem }) => {
    const dispatch = useDispatch()

    const removeItem = (cartItemId: number) => {
        dispatch(removeFromCart(cartItemId))
    }

    const decrementItemQty = (cartItemId: number) => {
        dispatch(decrementQty(cartItemId))
    }

    const incrementItemQty = (cartItemId: number) => {
        dispatch(incrementQty(cartItemId))
    }
    return (
        <li className={styles.cartItem}>
            <div className={styles.cartItemCont}>
                <Image width={70} height={70} src={cartItem.image} alt='' />
                <div className={styles.description}>
                    <h3>
                        <span>{cartItem.title}</span>
                        <p>
                            <span className={styles.price}>
                                {cartItem.price} ₾
                            </span>
                            <span className={styles.prevPrice}>
                                {cartItem.previousPrice} ₾
                            </span>
                        </p>
                    </h3>
                </div>
                <div className={styles.qtyCont}>
                    <h4 className={styles.changeQty}>
                        <span className={styles.operation} onClick={() => decrementItemQty(cartItem._id)}>-</span>
                        <span>{cartItem.quantity}</span>
                        <span className={styles.operation} onClick={() => incrementItemQty(cartItem._id)}>+</span>
                    </h4>
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => removeItem(cartItem._id)} />
                </div>
            </div>
        </li>
    )
}