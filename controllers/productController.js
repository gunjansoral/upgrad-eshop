const Product = require('../models/product.model');

exports.searchProduct = async (req, res) => {
  try {
    const { category = '',
      direction = 'DESC',
      name = '',
      sortBy = 'productId',
      pageNo = 0,
      pageSize = 10 } = req.query;

    // Validate direction parameter
    if (direction !== 'ASC' && direction !== 'DESC') {
      return res.status(400).json({ error: 'Invalid direction value. Only ASC or DESC allowed.' });
    }

    // Validate pageSize and pageNo parameters
    const parsedPageSize = parseInt(pageSize);
    const parsedPageNo = parseInt(pageNo);
    if (isNaN(parsedPageSize) || parsedPageSize <= 0 || isNaN(parsedPageNo) || parsedPageNo < 0) {
      return res.status(400).json({ error: 'Invalid pageSize or pageNo value.' });
    }

    // find products based on the user provided criteria
    const products = await Product.find({ category, name })
      .sort({ [sortBy]: direction })
      .skip(parsedPageNo * parsedPageSize)
      .limit(parsedPageSize);

    // sort products based on sort direction provided by user
    const sortedProducts = products.sort({ sortBy: 1 })
    res.status(200).json(sortedProducts)
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.getProductCategories = (req, res) => {

}

exports.getProductById = (req, res) => {

}

exports.saveProduct = async (req, res) => {
  const { name, category, price, description, manufacturer, availableItems, imageUrl } = req.body;

  // create a new product and save it in the database
  const product = new Product({
    name,
    category,
    price,
    description,
    manufacturer,
    availableItems,
    imageUrl
  });
  await product.save();

  res.satus(200).json(product)
}

exports.updateProductDetails = (req, res) => {

}

exports.deleteProduct = (req, res) => {

}