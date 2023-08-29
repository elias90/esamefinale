import Form from "./form"

function EditProduct(props) {
    return (
        <>
            <Form categories={props.categories} editProduct={props.editProduct}/>
        </>
    )
}

export default EditProduct