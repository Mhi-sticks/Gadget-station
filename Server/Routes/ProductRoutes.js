import express from "express";
import asyncHandler from "express-async-handler"
import Product from "../models/ProductModel.js";


const productRoute = express.Router()

//Get all products
productRoute.get("/", asyncHandler(
    async(req, res) => {
        const products = await Product.find({})
        res.json(products)
    })
); 

//Get single product
productRoute.get("/:id", asyncHandler(
    async(req, res) => {
        const product = await Product.findById(req.params._id)
            if(product) {
                res.json(product)
            }else{
res.status(404)
throw new Error("Product not found")
            }
    })
); 

//product review
productRoute.get("/:id/review", asyncHandler(
    async(req, res) => {
        const {rating, comment} = req.body
        const product = await Product.findById(req.params._id)
            if(product) {
                const alreadyReviewed = product.reviews.find(
                    (r) => r.user.toString() === req.user._id.toString()
                )
                if (alreadyReviewed) {
                    res.status(400)
                    throw new Error("product already reviewed")
                }
                const review ={
                    name: req.user.name,
                    rating:Number(rating),
                    comment,
                    user:req.user.id,
                }

                product.reviews.push(review)
                product.numReviews = product.reviewsLength
                product.rating=
                product.reviews.reduce((acc, item) => item.rating + acc, 0)/
                product.reviews.length

                await product.save()
                res.status(201).json({message:"review Added"})
            }else{
res.status(404)
throw new Error("Product not found")
            }
    })
); 

export default productRoute