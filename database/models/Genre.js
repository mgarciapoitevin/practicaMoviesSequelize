module.exports = function(sequelize, DataTypes){
    let alias = "Genre";

    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: DataTypes.STRING
        }
        name: {
            type: DataTypes.STRING
        }
        ranking: {
            unsigned: true,
            type: DataTypes.INTEGER
        }
        active: {
            type: DataTypes.INTEGER
        }
    };

    let config = {
        
    };

    let Genre = sequelize.define(alias, columns, config);
    return Genre;
}