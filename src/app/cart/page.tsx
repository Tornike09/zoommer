'use client'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../components/Header/Header'
import styles from './page.module.css'
import { RootState } from '../../../redux/store'
import { IProduct } from '../types'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartComp } from '../components/CartComp/CartComp'
import { clearCart } from '../../../redux/slices/cartSlice/cartSlice'
import image from '../../../images/emptybag.svg'
import Image from 'next/image'
import { useState } from 'react'
import { ClearCartModal } from '../components/ClearCartModal/ClearCartModal'
const Cart = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const cartItems = useSelector((state: RootState) => state.cart)

    const totalItems =
        cartItems?.reduce((acc: number, item: IProduct) => acc + item.quantity, 0) || 0;      

    const totalPrice =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.price * item.quantity,
      0
    ) || 0;

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            {
                cartItems.length > 0 ? <div className={styles.mainCont}>
                <div className={styles.cartHeading}>
                    <h2>შენს კალათაში {totalItems} ნივთია</h2>
                    <h4 onClick={handleModal}>
                        <FontAwesomeIcon icon={faTrashCan} />
                        <span>გასუფთავება</span>
                    </h4>
                    {isModalOpen && <ClearCartModal handleModal={handleModal}/>}
                </div>
                <div className={styles.cartMainCont}>
                    <CartComp/>
                    <div className={styles.totalCont}>
                        <div className={styles.allPrices}>
                            <h4>
                                <span className={styles.title}>ღირებულება</span>
                                <span>{totalPrice.toFixed(2)} ₾</span>
                            </h4>
                            <h4>
                                <span className={styles.title}>მიწოდების ღირებულება</span>
                                <span>0 ₾</span>
                            </h4>
                        </div>
                        <div className={styles.totalPrice}>
                            <h4>
                                <span className={styles.title}>გადასახდელი თანხა</span>
                                <span className={styles.total}>{totalPrice.toFixed(2)} ₾</span>
                            </h4>
                        </div>
                        <button>შემდეგი</button>
                    </div>
                </div>
            </div> : <div className={styles.emptyBag}>
                <Image src={image} alt='' />
            </div>
            }
        </div>
    )
}
export default Cart