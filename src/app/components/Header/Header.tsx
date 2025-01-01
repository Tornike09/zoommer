'use client'
import Image from 'next/image'
import styles from './Header.module.css'
import icon from '../../../../images/header-phone.svg'
import mainLogo from '../../../../images/main-logo.svg'
import dots from '../../../../images/dots.svg'
import search from '../../../../images/main-search.svg'
import cart from '../../../../images/header-cart.svg'
import { useState } from 'react'
import { CartModal } from '../CartModal/CartModal'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { IProduct } from '@/app/types'
export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const cartItems = useSelector((state: RootState) => state.cart)

    const totalItems =
        cartItems?.reduce((acc: number, item: IProduct) => acc + item.quantity, 0) || 0;

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    console.log(isModalOpen);

    return (
        <>
            <div className={styles.headerNavBar}>
                <div className={styles.navBarItems}>
                    <div>
                        <Image src={icon} alt="" />
                        <h4 >*7007 / +995 (32) 2 60 30 60</h4>
                    </div>
                    <div>
                        <h4 >სავაჭრო პოლიტიკა</h4>
                        <h4 >განვადება</h4>
                        <h4 >კარიერა</h4>
                        <h4 >Trade In</h4>
                        <h4 >ფილიალები</h4>
                        <h4 >ყველა აქცია</h4>
                    </div>
                </div>
            </div>
            <div className={styles.headerMainCont}>
                <div className={styles.headerMainContItems}>
                    <Link href={'/'}>
                        <Image src={mainLogo} alt='' />
                    </Link>
                    <div className={styles.navCont}>
                        <Image src={dots} alt='' />
                        <h4>ნავიგაცია</h4>
                    </div>
                    <div className={styles.search}>
                        <Image src={search} alt='' />
                        <input type='text' placeholder='ძიება' />
                    </div>
                    <div className={styles.cartCont} onMouseEnter={openModal}>
                        <h4>
                            <Image src={cart} alt='' />
                            <p>კალათა</p>
                        </h4>
                        {isModalOpen && <CartModal closeModal={closeModal}/>}
                        {cartItems.length > 0 && <div className={styles.productQty}>
                            <span>{totalItems}</span>
                        </div>}
                    </div>
                    <div className={styles.cartCont}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.12 12.78a1 1 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55M18.74 19.38A9.93 9.93 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58"></path><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path></svg>
                        <h4>შესვლა</h4>
                    </div>
                </div>
            </div>
        </>
    )
}