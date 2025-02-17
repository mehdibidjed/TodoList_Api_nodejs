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
      console.log('Connection to database Done !');
    } catch (error) {
      console.error('Impossible to connect to  PostgreSQL:', error);
    }
  })();
export default sequelize;
