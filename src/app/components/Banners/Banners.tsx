import Image from "next/image"
import banner1 from '../../../../images/a8284a90-ad43-46a4-9d7d-e48b0ba0ec63_Thumb.webp'
import banner2 from '../../../../images/af6aa919-d768-460b-a87b-a9d1e8b7077d_Thumb.webp'
import banner3 from '../../../../images/b96801c3-d3e5-41b0-8f0f-3e81c6e6be75_Thumb.webp'
import banner4 from '../../../../images/cf5c246b-e0ed-4805-b000-dd8d54e80ca4_Thumb.webp'
import styles from './Banners.module.css'

export const Banners = () => {
    return (
        <div className={styles.mainCont}>
            <Image src={banner1} alt="" />
            <Image src={banner2} alt="" />
            <Image src={banner3} alt="" />
            <Image src={banner4} alt="" />
        </div>
    )
}