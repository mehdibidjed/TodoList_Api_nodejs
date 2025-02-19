import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });

  (async () => {
    try {
      await sequelize.sync({ alter: true }); // Met à jour la table sans la recréer
      console.log("Table was synchronized!");
    } catch (error) {
      console.error("EError in synchornisation of the table :", error);
    }
  })();
export default sequelize;
