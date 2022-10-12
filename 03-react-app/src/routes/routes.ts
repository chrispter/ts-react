import { FC, lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-Lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-Lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
   to: string;
   path: string;
   Component: JSXComponent | LazyExoticComponent<() => JSX.Element> | LazyExoticComponent<FC<{}>>;
   name: string; 
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-Lazyload/Layout/LazyLayout'))


export const routes: Route[] = [
    { 
        path: '/lazyload/*', 
        to: '/lazyload/', 
        Component: LazyLayout, 
        name: 'LazyLayout - Dashboard' 
    },
    { 
        to: '/no-lazy', 
        path: 'no-lazy', 
        Component: NoLazy, 
        name: 'No Lazy' 
    },
]