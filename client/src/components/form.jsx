import axios from "axios";
import { useState } from "react";

function Form(props) {
    const action = props.action

    const getDefaultValues = () => ({
        name: "",
        price: "",
        description: "",
        imgUrl: "",
        categoryId: ""
    });
    
    const getUpdatedValues = (product) => ({
        name: product.name || "",
        price: product.price || "",
        description: product.description || "",
        imgUrl: product.imgUrl || "",
        categoryId: product.categoryId || ""
    });
    
    const [formData, setFormData] = useState(() => {
        if (action === 'update' && props.productToEdit) {
            return getUpdatedValues(props.productToEdit);
        }
        return getDefaultValues();
    });
    

    const updateInputData = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({...prevData,[name]: value,}));
    };

    const addProduct = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8020/addProduct/", formData);
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.error( error);
        }
    };

    const updateProduct = async(event) => {
        event.preventDefault();
        const productId = props.productToEdit._id;
        try {
            const response = await axios.patch("http://localhost:8020/editproduct/" + productId, formData);
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.error( error);
        }
    }


    return (
        <>
            <div className="flex flex-col p-5 rounded rounded bg-slate-100 gap-5 ">
                <h3 className="font-bold">{props.title}</h3>
                <form onSubmit={action == "update" ? updateProduct : addProduct} className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="Nome Articolo" 
                        name="name" 
                        value={formData.name} 
                        onChange={updateInputData} />
                    <input 
                        type="text" 
                        placeholder="Prezzo" 
                        name="price" 
                        value={formData.price} 
                        onChange={updateInputData} />
                    <input 
                        type="text" 
                        placeholder="Descrizione" 
                        name="description" 
                        value={formData.description} 
                        onChange={updateInputData} />
                    <input 
                        type="text" 
                        placeholder="Immagine" 
                        name="imgUrl" 
                        value={formData.imgUrl} 
                        onChange={updateInputData} />
                    <select 
                        name="categoryId" 
                        defaultValue={formData.categoryId} 
                        onChange={updateInputData} >
                        <option value="" disabled>Seleziona Categoria</option>
                            {
                                props.categories && props.categories.map((el, i) => (
                                    <option key={el.categoryId} value={el.categoryId}>{el.categoryName}</option>
                                ))
                            }
                    </select>
                    <button className="bg-black p-2 rounded text-white">{action == "update" ? 'Aggiorna Articolo' : 'Carica Articolo'}</button>
                </form>
                {/* <AddCategory categories={props.categories}/> */}
            </div>
        </>
    );
}

export default Form;
