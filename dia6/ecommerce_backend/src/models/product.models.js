const {Model,DataTypes,Sequelize} = require('sequelize')

const {CATEGORY_TABLE} = require('./category.models')

const TABLE_NAME = 'tbl_product'

const ProductSchema = {
    id:{
        field:'id',
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        field:'name',
        allowNull:false,
        type:DataTypes.STRING
    },
    description:{
        field:'description',
        allowNull:true,
        type:DataTypes.STRING
    },
    price:{
        field:'price',
        allowNull:true,
        type:DataTypes.DOUBLE
    },
    image:{
        field:'image',
        allowNull:true,
        type:DataTypes.STRING
    },
    stock:{
        field:'stock',
        allowNull:true,
        type:DataTypes.INTEGER
    },
    category_id:{
        field:'category_id',
        allowNull:true,
        type:DataTypes.INTEGER,
        references:{
            model:CATEGORY_TABLE,
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
    }
}

class Product extends Model{
    static associate(models){
        this.belongsTo(models.Category,{as :'category'})
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:TABLE_NAME,
            modelName:'Product',
            timestamps:false
        }
    }
}

module.exports = {TABLE_NAME,ProductSchema,Product}