import Product from "./productsModel.mjs";
import CRUDManager from "../CRUDManager.mjs";

class ProductsServece extends CRUDManager {
  constructor() {
    super(Product);
  }
  async getList(filter) {
    try {
      const products = await super.getList(filter, {password: 0}, ['type']);
      return products;
    } catch (error) {
      return [];
    }
  }


  async sortProdService(option) {     
     const sortOrder = option.sort === 'asc' ? 1 : -1;
     console.log(sortOrder);
     
    const products = await Product.find().sort({price: sortOrder}).lean();
    return products;
  }
}

export default new ProductsServece(Product)