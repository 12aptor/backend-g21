const {Router} = require('express')
const router = Router()

const {create,getAll,getOne,updateOne,deleteOne, auth} = require('../controllers/user.controller')

router.route('/')
    .post(create)
    .get(getAll)

router.route('/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)

router.route('/auth')
    .post(auth)

module.exports = router