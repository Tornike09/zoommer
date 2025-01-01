import styles from './ClearCartModal.module.css'
import xIcon from '../../../../images/mobile-modal-close.svg'
import Image from 'next/image'
import { IProduct } from '@/app/types'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../../redux/slices/cartSlice/cartSlice'
import { RootState } from '../../../../redux/store'

interface IClearCartModal {
    handleModal: () => void
}
export const ClearCartModal: React.FC<IClearCartModal> = ({ handleModal }) => {
    const dispatch = useDispatch()

    const cartItems = useSelector((state: RootState) => state.cart)

    const clearWholeCart = (cartItems: IProduct[]) => {
        dispatch(clearCart(cartItems))
        handleModal()
    }  
    return (
        <div className={styles.wrapper}>
            <div className={styles.blurCont}></div>
            <div className={styles.modalCont}>
                <div className={styles.modalHead}>
                    <Image src={xIcon} alt='' onClick={handleModal}/>
                     <h3>კალათის გასუფთავება</h3>
                </div>
                <div className={styles.clearCont}>
                    <h3>ნამდვლიად გსურთ კალათის გასუფთავება</h3>
                    <div>
                        <button onClick={() => clearWholeCart(cartItems)}>დიახ</button>
                        <button className={styles.orange} onClick={handleModal}>არა</button>
                    </div>
                </div>
            </div>
        </div>
    )
}