const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const data = await
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
    ]
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await
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
  .catch(err => console.log("error", err));
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await
  Tag.create({
    tag_name: req.body.tag_name,
  })
.catch(err => console.log("error", err));
res.json(data);
});

router.put('/:id', async (req, res) => {
  const data = await
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

router.delete('/:id', async (req, res) => {
  const data = await
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

module.exports = router;
