import { createContext, FC } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard: FC<ProductCardProps> = ({ children, product }) => {

    const { counter, increseBy } = useProduct();

    return (
        <Provider value={{
            counter, 
            increseBy, 
            product
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}
