module.exports = function (sequelize, DataTypes) {
  const alias = "Movie";

  const columns = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    awards: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  };

  const config = {
    tableName: "movies",
    timestamps: true,
    underscored: true,
  };

  const Movie = sequelize.define(alias, columns, config);

  Movie.associate = function (models) {
    Movie.belongsToMany(models.Actor, {
      as: "actor",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });

    Movie.belongsTo(models.Genre, {
      as: "genre",
      foreignKey: "genre_id",
      timestamps: false,
    });
  };

  return Movie;
};
