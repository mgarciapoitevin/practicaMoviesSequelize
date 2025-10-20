module.exports = function(sequelize, DataTypes){
    let alias = "Genre";

    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(100)
        },
        ranking: {
            unsigned: true,
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.INTEGER
        },
        created_at: {
            timestamp: true,
            type: DataTypes.DATE
        },
        updated_at: {
            timestamp: true,
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "genres",
        timestamps: true,
        underscored: true
    };

    let Genre = sequelize.define(alias, columns, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "id"
        })
    }

    return Genre;
}