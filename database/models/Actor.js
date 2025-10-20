module.exports = function (sequelize, DataTypes) {
  let alias = "Actor";

  let columns = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
    },
    favorite_movie_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: { model: "movies", key: "id" },
    },
  };

  let config = {
    tableName: "actors",
    timestamps: true,
    underscored: true,
  };

  const Actor = sequelize.define(alias, columns, config);

  Actor.associate = function (models) {
    Actor.belongsToMany(models.Movie, {
      as: "movies",
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });
  };

  return Actor;
};
