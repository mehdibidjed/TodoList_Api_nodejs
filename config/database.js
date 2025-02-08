import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });

  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Connexion à PostgreSQL réussie');
    } catch (error) {
      console.error('Impossible de se connecter à PostgreSQL:', error);
    }
  })();
module.exports=sequelize;