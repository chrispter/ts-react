import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Buttons: (Props : ProductButtonProps ) => JSX.Element;
    Image: (Props : ProductImageProps ) => JSX.Element;
    Title: (Props : ProductTitleProps) => JSX.Element;
}