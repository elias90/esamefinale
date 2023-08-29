import axios from "axios";
import { Product, Category } from "../config/db.js";
import mongoose from "mongoose";

const urlDB = 'mongodb+srv://eliasripari:EGaw8idgIJYBSZFl@cluster.wrj9rtk.mongodb.net/?retryWrites=true'

const menu = [
    {name: 'Home', path: '/'},
    {name: 'Settings', path: '/settings'}
]

class Controller {

    static async index(req, res) {
        const products = await Product.find();
        const categories = await Category.find();
        res.json({
            products: products,
            categories: categories
        });
    }

    static async addProduct(req, res) {
        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categoryId: req.body.categoryId,
            imgUrl: req.body.imgUrl
        }

        const addProduct = new Product(newProduct);
        await addProduct.save();
        res.json(addProduct);
    }

    static async editProduct(req, res) {
        const editProduct = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categoryId: req.body.categoryId,
            imgUrl: req.body.imgUrl
        }

        const productId = req.params.id;

        const updatedProduct = await Product.findOneAndUpdate(
            { _id: productId }, // criteri di ricerca
            editProduct, // dati da aggiornare
            { new: true } // ritorna il documento modificato
        );
        res.json(updatedProduct);
    }

    static async addCategory(req, res) {
        const category = new Category(req.body)

        const newCategory = {
            categoryId: req.body.categoryId,
            categoryName: req.body.categoryName,
            categoryImg: req.body.categoryImg
        }

        await category.save(newCategory)
        res.json(category)
    }

    static async deleteProduct(req, res) {
        const idProduct = req.params.id
        const deleteProduct = await Product.findByIdAndDelete(idProduct);
        res.status(200).send({message: "Product deleted"})
    }



    static async pageProduct(req, res) {
        const idProduct = req.params.id
        const product = await Product.findById(idProduct);
        res.json({product: product})
    }

    // static async editProduct(req, res) {
    //     const idProduct = req.params.id
    //     const product = await Product.findById(idProduct);
    //     res.json({product: product})
    // }
 
}

export {Controller}