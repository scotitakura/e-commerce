const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const data = await
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ]
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await
  Category.create({
    category_name: req.body.category_name
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

router.put('/:id', async (req, res) => {
  const data = await
  Category.update({
    category_name: req.body.category_name
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
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .catch(err => console.log("error", err));
  res.json(data);
});

module.exports = router;
