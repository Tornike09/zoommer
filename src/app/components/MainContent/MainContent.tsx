import { Banners } from "../Banners/Banners"
import { MainNavBar } from "../MainNavBar/MainNavBar"
import styles from './MainContent.module.css'
import Image from "next/image"
import branchBanner from '../../../../images/fe25de5d-cb03-4b12-ac44-9c2cfbcdbd80.webp'
import TBCBanner from '../../../../images/ffa8a998-5b32-4da5-b6fe-c026a6ba013b_Thumb.webp'
import { Swiper } from "../Swiper/Swiper"

export const MainContent = () => {
    return (
        <div className={styles.mainCont}>
            <div className={styles.cont}>
                <MainNavBar />
                <Banners />
            </div>
            <div className={styles.cont}>
                <Swiper title={'სულსწრაფი ფასდაკლებები'} category={'phone'} gift={false}/>
            </div>
            <div className={styles.cont}>
                <Image className={styles.branchBanner} src={branchBanner} alt='' />
            </div>
            <div className={styles.cont}>
                <Swiper title={'აღმოაჩინე რა საჩუქრები გელოდება'} category={'watch'} gift={true}/>
            </div>
            <div className={styles.cont}>
                <Image className={styles.branchBanner} src={TBCBanner} alt='' />
            </div>
        </div>
    )
}