const Product = require('../models/Product')

//Retrieving all products
const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }
// Get product by id

const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product)return res.status(404).json({message:'Product not found'})
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }


  //Creating a product

const createProduct = async(req, res) => {

    const {name,price,description,image} = req.body

    try {
        const newProduct = new Product({name,price,description,image})

        await newProduct.save()
        res.status(201).json(newProduct)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }

  //Update product

  const updateProduct = async(req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatedProduct)return res.status(404).json({message:'Product not found'})
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }

//Delete product
const deleteProduct = async(req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deletedProduct)return res.status(404).json({message:'Product not found'})
        res.status(200).json({message:"Product deleted successfully"})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }

module.exports = {getAllProducts,createProduct,getProductById,updateProduct,deleteProduct}