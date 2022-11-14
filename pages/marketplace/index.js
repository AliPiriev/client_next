import Filter from "../../components/marketplace/Filter";
import Header from "../../components/marketplace/Header";
import Product from "../../components/marketplace/Product";
import styles from '../../styles/marketplace/Marketplace.module.scss';
import { useSelector } from "react-redux";

const Marketplace = (props) => {
    const paginData = useSelector((state) => state.utilsState.filterData);
    return (
        <div className={styles.mainWrapp}>
            <Header />
            <div className={`${styles.secondWrapp} ${'container'}`}>
                <Filter />
                <Product />
            </div>
        </div>
    );
};

export default Marketplace;