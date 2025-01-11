import Image from 'next/image'
import notFound from '../app/images/404.webp'
import { Header } from './components/Header/Header'
import Link from 'next/link'
import styles from './not-found.module.css'

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className={styles.mainContent}>
                <div>
                    <Image src={notFound} alt='' />
                    <Link href={'/'}>მთავარზე დაბრუნება</Link>
                </div>
            </div>
        </div>
    )
}
export default NotFound