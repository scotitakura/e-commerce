const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{
      model: Product,
      through: {
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id',
        ]
      }
    }],
    attributes: [
      'id',
      'tag_name'
    ],
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [{
      model: Product,
      through: {
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id',
        ]
      }
    }],
    where: {
      id: req.params.id
    }
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
});

router.put('/:id', (req, res) => {
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  Tag.destory({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
