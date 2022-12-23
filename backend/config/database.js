import { Sequelize } from "sequelize";

const db = new Sequelize('wargapedulilingkungan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db;