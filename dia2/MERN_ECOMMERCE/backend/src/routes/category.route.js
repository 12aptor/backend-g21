const {Router} = require('express')
const router = Router()

const {create} = require('../controllers/category.controller')

router.route('/')
.post(create)

module.exports = router