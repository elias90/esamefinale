function CategoryGrid(props) {

    const categories = props.categories

    return(
        <>
            <h2 className="text-4xl">
                    Categorie
            </h2>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {
                    categories.map((el, i) => (
                        <div key={i} className="flex flex-col justify-end h-[550px] p-5 bg-cover bg-center rounded relative" style={{ backgroundImage:`url(${el.categoryImg})` }}>
                            <div className="absolute w-full h-full top-0 left-0 rounded z-0 bg-gradient-to-b from-transparent to-black "></div>
                            <div className=" z-10">
                                <h5 className="text-3xl text-white">{el.categoryName}</h5>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default CategoryGrid