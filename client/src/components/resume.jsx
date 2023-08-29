import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import EditProduct from './updateProduct';


function Resume(props) {

    const [filteredProducts, setFilteredProducts] = useState([])
    //const [showEditProduct, setShowEditProduct] = useState(false)

    const addProductDiv = document.getElementById('addProductDiv')

    useEffect(() => {
        setFilteredProducts(props.products)
        }, [props.products]
    )

    async function deleteBill(productID) {
        try {
            const res = await axios.delete(`http://localhost:8020/deleteProduct/${productID}`)
            console.log(res.bills.message)
        } catch (error) {
            console.log(error)
        }
        window.location.reload(true);
    }

    function filterProducts(e) {
        const categorySelected = e.target.value
        const categorySelectedId = props.categories.find((el) => el.categoryName === categorySelected)
        setFilteredProducts(
        categorySelected == "Tutte" ? props.products : props.products.filter(el => el.categoryId === categorySelectedId.categoryId)
        )
        
        console.log(categorySelectedId)
    }

    // function editProduct(id) {
    //     setShowEditProduct(true);
    // }

    function addPorductModal(e) {
        addProductDiv.classList.toggle('hidden')
    }
    

    return(
        <>
            <section className='flex flex-row justify-between pb-2 border-b mb-2 items-center'>
                <span className='text-xl'>Admin </span>
                <div className='flex flex-row gap-5'>
                    <button className='p-2 rounded bg-black text-white flex flex-row gap-2' onClick={addPorductModal}>Aggiungi Nuovo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    </button>
                    <select 
                        name="" 
                        id=""
                        defaultValue={""}
                        onChange={filterProducts}>
                            <option value="Tutte" >Tutte</option>
                            { 
                                props.categories.map((el, i) => (
                                    <option key={i} value={el.categoryName}>{el.categoryName}</option>
                                ))
                            }
                    </select>
                </div>
            </section>
            <section className="flex flex-col gap-2 h-full">
                {filteredProducts.map((el, index) => (
                    <div key={el._id} className="flex flex-row p-2 rounded border bg-white justify-between gap-5 items-center">
                        <img src={el.imgUrl} alt="" className="w-16 aspect-square object-cover rounded"/>
                        <div className="flex flex-row w-full items-center justify-between">
                            <div className="w-2/3 flex flex-col">
                                <span><a href={`/product/${el._id}`}>{el.name}</a></span>
                                <span className='text-sm text-slate-500'>id Prodotto: {el._id}</span>
                            </div>
                            <div className="w-1/3 flex gap-5 items-center justify-between pr-32">
                                <span className=''>{props.categories.find(category => category.categoryId === el.categoryId)?.categoryName}</span>
                                <span className=' font-bold'>€ {el.price},00</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Link to={{
                                pathname: "/editproduct/" + el._id,
                                id: el._id
                            }}>
                                <button onClick={() => editProduct(el._id)} className='rounded bg-slate-200 p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button>
                            </Link>
                                
                            <button onClick={() => deleteBill(el._id)} className='rounded bg-slate-200 p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                ))}

            </section>
            {/* <section className={`flex flex-col justify-center items-center absolute bg-black bg-opacity-50 w-full h-full top-0 left-0 z-20 ${showEditProduct ? '' : 'hidden'}`} 
                id='editProduct'>
                <EditProduct categories={props.categories} editProduct={editProduct}/>
            </section> */}
        </>    
    )
}

export default Resume