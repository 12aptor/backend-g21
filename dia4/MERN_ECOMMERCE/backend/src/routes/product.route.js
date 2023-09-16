const {Router} = require('express')
const router = Router()

const {create,getAll,getOne,updateOne,deleteOne,uploadProductImage} = require('../controllers/product.controller')

router.route('/')
    .post(create)
    .get(getAll)

router.route('/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)

router.route('/upload')
    .post(uploadProductImage)

module.exports = router