import express from "express"
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { braintreePaymentController, braintreeTokenController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productController, productCountController, productFilterController, productListController, productPhotoController, relatedProductController, searchProduct, updateProductController } from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router()

//routes
router.post("/create-product", requireSignIn, isAdmin, formidable(), productController)

// update-product
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController)

//get product
router.get("/get-product", getProductController)

//get single product
router.get("/get-product/:slug", getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController)

//delete product
router.delete("/delete-product/:pid", deleteProductController)

//filter product
router.post("/product-filters", productFilterController)

//product count
router.get("/product-count", productCountController)

// product per page
router.get("/product-list/:page", productListController)

//search pro
router.get("/search/:keyword", searchProduct)

//similar products
router.get("/related-product/:pid/:cid", relatedProductController)

//category wise product
router.get("/product-category/:slug", productCategoryController)

//payments route
// token
router.get("/braintree/token", braintreeTokenController)

//payment 
router.post("/braintree/payment", requireSignIn, braintreePaymentController)

export default router