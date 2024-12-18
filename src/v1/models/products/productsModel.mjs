import mongoose from "mongoose";

const { Schema } = mongoose

const productsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters long'],
      maxlength: [15, 'Name must be at most 15 characters long'],
      trim: true,
      escape: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price must be a positive number'],
      trim: true,
      escape: true,
    },
    counter: {
      type: Number,
      required: [true, 'Price is required'],
      default: 0,
      trim: true,
      escape: true,
    },
    imageSrc: {
      type: String,
    },
  },
  {collection: 'products'}
);

const Product = mongoose.model('Product', productsSchema)
export default Product