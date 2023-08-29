import { useState } from "react"
import axios from "axios";

function AddCategory(props) {

    const [newCategory, setNewCategory] = useState({
        categoryId: "",
        categoryName: "",
        categoryImg: "",
    });

    const categoryCounter = props.categories.length;
    console.log(categoryCounter)

    const updateInputData = (event) => {
        const {name, value} = event.target;
        setNewCategory((prevData) => ({...prevData,[name]: value,}));
    };

    const addNewCategory = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8020/addCategory/", newCategory);
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.error( error);
        }
    };

    return (
        <>
            <div className="flex flex-col p-5 pt-0 rounded rounded-t-none bg-slate-100 gap-5">
                <form onSubmit={addNewCategory} className="flex flex-row">
                    <input 
                            className="grow rounded-r-none" 
                            type="text" name="categoryName" 
                            placeholder="Aggiungi Categoria" 
                            value={newCategory.categoryName} 
                            onChange={updateInputData}
                            />
                        <input 
                            type="text" 
                            name="categoryId" 
                            id="" value={categoryCounter} 
                            hidden
                            />
                        <input 
                            className="grow rounded-r-none" 
                            type="text" 
                            name="categoryImg" 
                            placeholder="Aggiungi url immagine categoria" 
                            value={newCategory.categoryImg} 
                            onChange={updateInputData}
                            />
                        <button className="bg-black p-2 rounded text-white rounded-l-none">Aggiungi</button>
                </form>
            </div>
        </>
    )
}

export default AddCategory