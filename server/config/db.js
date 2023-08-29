import mongoose from "mongoose";

const urlDB = 'mongodb+srv://eliasripari:EGaw8idgIJYBSZFl@cluster.wrj9rtk.mongodb.net/finalTest'

mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {console.log('Connesso a MongoDB')})
    .catch(err => console.log(err))

// Schemas

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: false},
    description: {type: String, required: false},
    price: {type: Number, required: false},
    categoryId: {type: Number, required: false},
    imgUrl: {type: String, required: false}
})

const CategoriesSchema = new mongoose.Schema({
    categoryId: {type: Number, required: false},
    categoryName: {type: String, required: false},
    categoryImg: {type: String, required: false}
})

export const Product = mongoose.model("products", ProductSchema,)
export const Category = mongoose.model("categories", CategoriesSchema,)