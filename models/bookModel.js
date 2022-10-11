const { books } = require(".")

module.exports =(sequelize,DataTypes)=>{
    const Book = sequelize.define("Book",{
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        pages:{
            type: DataTypes.STRING,
            allowNull: false

        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    })
    return Book

}