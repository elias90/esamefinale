import { Link } from "react-router-dom"

function ProductsGrid(props) {

    const products = props.products

    return(
        <>
            <h2 className="text-4xl">
                    Prodotti
            </h2>
            <section>
                <div className="flex flex-row w-full p-20 pt-72 pb-0 rounded bg" style={{backgroundImage:`url('https://www.sotf.com/common/images/special_gallery/230127_NIKE_DUNK/sg_ss23_dunk.jpg')`}}>
                    <div className=" flex flex-row grow w-full justify-end items-end -mb-16">
                        <img src={products && products[0] && products[0].imgUrl} alt="" className="w-full aspect-square object-cover rounded max-w-md"/>
                        <div className="w-full flex flex-row justify-start -mx-10 z-10 mb-10">
                        <h3 className="text-4xl bg-black p-2 rounded text-white">{products && products[0] && products[0].name} // € {products && products[0] && products[0].price}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-20">
                {
                    products.map((el, i) => (
                        <div className="flex flex-col gap-2" >
                            <img src={el && el.imgUrl} alt="" className="w-full aspect-square object-cover rounded"/>
                            <div className="flex flex-col justify-between">
                            <h5 className="text-md text-black">
                                <Link to={`/product/${el._id}`}>{el.name}</Link>
                            </h5>
                            <span className="text-md">€ {el.price},00</span> 
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default ProductsGrid