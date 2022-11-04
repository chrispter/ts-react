import { CSSProperties, useContext } from "react";
import noImg from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    img?: string;
    style?: CSSProperties;
}

export const ProductImage = ( { img, className, style } : Props ) => {

    const { product } = useContext( ProductContext );
    
    let imgToShow: string;

    if( img ){
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img;
    } else {
        imgToShow = noImg;
    }

    return (
        <img 
            alt='product' 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            style={ style }  
        />
    )
}