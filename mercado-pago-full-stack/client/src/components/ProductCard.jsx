
export const ProductCard = ({product}) => {
    return(
        <div className="flex flex-col items-center gap-y-4">
        
            <img 
                src={product.imageUrl}
                className="w-44 border-2 border-black object-cover"
                alt="img"
            />
            <p
                className="text-2xl"
            >
                {product.title}
            </p>
            <button
                className="shadow-2xl rounded-full px-12 py-2 bg-red-500 transition-all hover:scale-95"
            >
                Pagar
            </button>
        </div>
    )
}