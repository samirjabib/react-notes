import { ProductCard } from "./ProductCard"

export const ProductList = () => {

    const products = [
        {
            id:1,
            title:'poster anime mix',
            imageUrl:'https://sm.ign.com/ign_es/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_sypg.jpg'
        },
        {
            id:2,
            title:'poster lufy',
            imageUrl:'https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png'
        },
    ]

    return(
        <>
            {
                products.map( (product) => {
                    return(
                        <ProductCard 
                            product={product}
                            key={product.id}
                        />
                    )
                })
            }
        </>
    )
}