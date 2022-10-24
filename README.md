
<p align="center">
  <a href="https://es.reactjs.org/" target="blank"><img src="./03-react-app/src/logo.svg" width="200" alt="Nest Logo" /></a>
</p>

# Dev

Proyectos vistos en React PRO


Clone
```
git clone git@github.com:chrispter/ts-react.git
````

Install
```
yarn
```

Ejecutar
```
yarn start
```

## LazyLoad con React Router DOM V6

- Aplicar Lazy Load en cada Componente
- Aplicar Lazy Load por módulo

```javascript
export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Rutas hijas iran aqui */}
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={ <LazyPage1 /> } />
        <Route path="lazy2" element={ <LazyPage2 /> } />
        <Route path="lazy3" element={ <LazyPage3 /> } />

        {/* <Route path="*" element={ <div>Not Found</div> } /> */}
        <Route path="*" element={ <Navigate replace to="lazy1" /> } />

      </Routes>
    </div>
  )
}

export default LazyLayout;
}
```

## Component Compound Pattern

<p>Patrón de construcción de componentes llamado "Compound Component Pattern" el cual es muy usado por Material UI, ionic y muchos otros que trabajan con componentes previamente creados que se pueden anidar entre si mediante HOCs (Higher Order Components)</p>


```mermaid
graph TD;
    02-components-patters-->
    assets
    components
    hooks
    interface
    Pages
    styles
    ;
```


```javascript
export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title='Cafe' />
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={ product }>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>  

        </div>
    </div>
  )
}
```