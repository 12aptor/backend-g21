const {Router} = require('express')
const router = Router()

const {create,getAll,getOne,updateOne,deleteOne, auth} = require('../controllers/user.controller')
const {verifyToken} = require('../middlewares/auth.handler')

router.route('/')
    .post(create)
    .get(verifyToken,getAll)

router.route('/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)

router.route('/auth')
    .post(auth)

module.exports = router