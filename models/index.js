const dbConfig = require('../config/dbConfig.js');

const {Sequelize,DataTypes} = require('sequelize');
console.log(dbConfig)
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases:false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('Connected.')
})
.catch(err =>{
    console.log('hello')
    console.log('Error'+ err)
})
const db = {}

db.Sequelize = Sequelize
db.sequelize= sequelize

db.books = require('./bookModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: true})
//.then(()=>{
//    console.log('re-sync is Done!')
//})

// 1 to Many Relation
db.books.hasMany(db.reviews,{
    foreignKey: 'book_id',
    as: 'review'
})

db.reviews.belongsTo(db.books,{
    foreignKey: 'book_id',
    as: 'book'
})
module.exports = db