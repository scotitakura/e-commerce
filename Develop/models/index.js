// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category);

Category.hasMany(Product);

Product.belongToMany(Tag, { through: ProductTag })

Tag.belongToMany(Product, { through: ProductTag })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
