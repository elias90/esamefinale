import { useState, useEffect } from "react";
import Header from './header';
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductPage(props) {

    const [product, setProduct] = useState({});
    const {id} = useParams();  
    console.log(id)

    useEffect(() => {
        const fn = async () => {
            try {
                const res = await axios.get(`http://localhost:8020/product/${id}`)
                setProduct(res.data.product);
            } catch (error) {
                console.log(error)
            }
        };
        
        fn();

    }, [id]); 

    console.log(product)
    
    return (
        <>
            <section className='flex flex-col gap-10 p-10 justify-center'>
                <Header />
                <section className=' container flex flex-row h-full gap-10 self-center'>
                    <div className="w-2/3">
                    <img src={product && product.imgUrl} alt="" className="w-full aspect-square object-cover rounded"/>
                    </div>
                    <div className="flex flex-col w-1/3 gap-3">
                        <span className=" italic">{props.categories.find(category => category.categoryId === product.categoryId)?.categoryName}</span>
                        <h2 className="text-3xl font-bold">{product && product.name}</h2>
                        <span className="text-xl">€ {product && product.price},00</span>
                        <p className="text-sm">{product && product.description}</p>
                        <button className="p-5 px-10 bg-black text-white rounded-full self-start text-xl mt-5">Aggingi al carrello</button>
                    </div>
                </section>

            </section>
        </>
    )
}

export default ProductPage;
