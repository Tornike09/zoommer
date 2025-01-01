'use client'
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { Products } from "../components/Products/Products";
import styles from './page.module.css'
import { RootState } from "../../../redux/store";

const Mobilurebi = () => {
    const category = useSelector((state: RootState) => state.category)
    return (
        <div>
            <Header />
            <div className={styles.mainCont}>
                <div>
                    <Products category={category} listType={'vertical'} gift={false}/>
                </div>
            </div>
        </div>
    )
}
export default Mobilurebi;