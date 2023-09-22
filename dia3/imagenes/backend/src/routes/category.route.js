const {Router} = require('express')
const router = Router()

const {create,getAll, getOne,updateOne,deleteOne} = require('../controllers/category.controller')
const {verifyToken} = require('../middlewares/auth.handler')

router.route('/')
.post(create)
.get(getAll)

router.route('/:id')
.get(getOne)
.put(updateOne)
.delete(deleteOne)

module.exports = router