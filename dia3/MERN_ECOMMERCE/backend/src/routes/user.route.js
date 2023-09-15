const {Router} = require('express')
const router = Router()

const {create,getAll} = require('../controllers/user.controller')

router.route('/')
    .post(create)
    .get(getAll)



module.exports = router