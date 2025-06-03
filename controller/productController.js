const products = require("../data/products");


//get all products
async function getAllProducts(req,res){
    res.status(200).json({success:true,message:"products fetched",data:products})
};
//get product by id
async function getProductById(req, res) {
  try {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (product) {
      return res
        .status(200)
        .json({ success: true, message: "this is product", data: product });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ success: false, message: "could not find product" });
  }
}
// delete product
async function deleteProductById(req, res) {
  try {
    const id = parseInt(req.params.id);
    const initialLength = products.length;
    const product = products.filter((p) => p.id !== id);

    if (products.length < initialLength) {
      res.status(200).json({success:true, message: "Product deleted",data:product});
    };
  } catch (e) {
    res.status(404).json({ error: "Product not found" });
  }
};


module.exports = {getAllProducts,getProductById,deleteProductById};