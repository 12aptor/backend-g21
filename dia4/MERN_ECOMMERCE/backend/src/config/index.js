require('dotenv').config()

const config = {
    port : process.env.PORT || '5000',
    mongoUri : process.env.MONGOURI || 'mongodb://localhost:27017/db_ecommerce_express',
    jwt_secret: process.env.JWT_SECRET || 'qwerty123'
}

module.exports = {config}