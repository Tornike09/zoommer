'use client'
import { IProduct } from "@/app/types"
import Image from "next/image"
import styles from './CartItemInModal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { decrementQty, incrementQty, removeFromCart } from "../../../../redux/slices/cartSlice/cartSlice"

interface ICartItemsProps {
    cartItem: IProduct
}

export const CartItemInModal: React.FC<ICartItemsProps> = ({ cartItem }) => {
    const dispatch = useDispatch()
    const removeItem = (cartItemId: number) => {
        dispatch(removeFromCart(cartItemId))
    }
    const incrementItemQty = (cartItemId: number) => {
        dispatch(incrementQty(cartItemId))
    }
    const decrementItemQty = (cartItemId: number) => {
        dispatch(decrementQty(cartItemId))
    }
    return (
        <li className={styles.cartItem}>
            <div className={styles.cartItemCont}>
                <Image src={cartItem.image} alt="" width={70} height={70} />
                <div className={styles.aboutProduct}>
                    <span>{cartItem.title}</span>
                    <span>{cartItem.price} ₾</span>
                </div>
                <div className={styles.qtyCont}>
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => removeItem(cartItem._id)}/>
                    <h4 className={styles.changeQty}>
                        <span className={styles.operation} onClick={() => decrementItemQty(cartItem._id)}>-</span>
                        <span>{cartItem.quantity}</span>
                        <span className={styles.operation} onClick={() => incrementItemQty(cartItem._id)}>+</span>
                    </h4>
                </div>
            </div>
        </li>
    )
}