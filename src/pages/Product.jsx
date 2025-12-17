import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState([])
    const GetProduct = async () => {
        try {
            const response = await fetch("https://dummyjson.com/product")
            const data = await response.json()
            setProduct(data.products)

        } catch (err) {
            console.error(err);

        }
    }
    useEffect(() => {
        GetProduct()
    }, [])
    return (
         <div className='flex flex-wrap justify-center gap-5'>
            {product.map(item => (
                <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product
