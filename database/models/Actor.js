// database/models/Actor.js
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actor',
    {
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
        references: { model: 'movies', key: 'id' },
      },
    },
    {
      tableName: 'actors',
      timestamps: true,
      underscored: true,
    }
  );

  Actor.associate = (models) => {
    Actor.belongsToMany(models.Movie, {
      as: 'movies',
      through: 'actor_movie',
      foreignKey: 'actor_id',
      otherKey: 'movie_id',
      timestamps: true,
    });

    Actor.belongsTo(models.Movie, {
      as: 'favoriteMovie',
      foreignKey: 'favorite_movie_id',
    });
  };

  return Actor;
};