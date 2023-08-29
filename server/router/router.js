import express from "express";
import { Controller } from "../controller/controller.js";

const router = express.Router()

router
    .get('/', Controller.index)

router
    .get('/product/:id', Controller.pageProduct)
    .post('/addProduct', Controller.addProduct)
    .patch('/editProduct/:id', Controller.editProduct)
    .delete('/deleteProduct/:id', Controller.deleteProduct)

router 
    .post('/addCategory', Controller.addCategory)


export default router