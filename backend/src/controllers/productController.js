import { 
  getProducts,
  fetchProductById,
  insertProduct,
  editProduct,
  destroyProduct
} from '../models/productModel.js'

export const getAllProducts = async (req, res, next) => {
  try {
    const data = await getProducts()
    res.status(200).json(data);
    console.log(data)
  } catch (error) {
    next(error); // Pass to error handler
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await fetchProductById(id)

    if(!product){
      const error = new Error(`Product ${id} was not found`)
      return next(error)
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const products = {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock
    }
    const newProduct = await insertProduct(products)
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await editProduct(id, req.body)

    if(!product){
      const error = new Error(`Product ${id} was not found`)
      return next(error)
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id
    await destroyProduct(id)
    res.status(200).json({ message: `Product ${id} deleted successfully` });
  } catch (error) {
    next(error);
  }
};