import Header from "./header"
import CategoryGrid from "./homeCategoryList"
import ProductsGrid from "./homeProductsList"

function Homepage(props) {
    return (
        <>
            <section className='flex flex-col gap-10 p-10 h-full '>
                <Header />
                <CategoryGrid categories={props.categories}/>
                <ProductsGrid products={props.products}/>
            </section>
        </>
    )
}

export default Homepage