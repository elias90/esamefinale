import Header from "./header"
import Form from "./form"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function EditProduct({products, categories}) {

    const action = "update"
    const params = useParams();
    const productToEdit = products.filter((el) => el._id === params.id);
    const navigate = useNavigate();

    return (
        <>
             <section className='flex flex-col gap-10 p-10 h-screen'>
                <Header />
                <section className="flex flex-row gap-10">
                    <div className="w-1/3 flex flex-col bg-slate-100 rounded p-5">
                        <h2 className="text-2xl mb-5">Altri prodotti</h2>
                        <div className="flex flex-col gap-2">
                            {
                                products.map((el) => (
                                    <div key={el._id} className="flex flex-row gap-3 items-center">
                                        <img src={el && el.imgUrl} alt="" className="w-10 h-10 border rounded object-cover"/>
                                        {el.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-2/3 self-center">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-2xl">{productToEdit[0] && productToEdit[0].name}</h2>
                            <button onClick={() => navigate(-1)}>Torna indietro</button>
                        </div>
                        <Form productToEdit={productToEdit[0]} categories={categories} action={action} title={'Modifica prodotto'}/>
                     </div>
                </section>
            </section>
        </>
    )
}

export default EditProduct